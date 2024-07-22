import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import database from "@/database/drizzle";
import { units } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { currentUser } from "@clerk/nextjs/server";

const nextLink = process.env.NEXT_PUBLIC_URL!;

export const GET = async (
    req: Request,
    { params }: { params: { unitId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const data = await database.query.units.findFirst({
        where: eq(units.id, params.unitId),
    });

    return NextResponse.json(data);
};


export const PUT = async (
    req: Request,
    { params }: { params: { unitId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const body = await req.json();

    const data = await database.update(units).set({
        ...body,
    }).where(eq(units.id, params.unitId)).returning();

    if (user != null) {
        const response = await fetch(`${nextLink}/api/actions`, {
            method: "GET",
        })

        const data = await response.json()
        await fetch(`${nextLink}/api/actions`, {
            method: "POST",
            body: JSON.stringify({
                "actionId": data.length + 1,
                "userName": `${user.firstName} ${user.lastName} (admin)`,
                "actionName": `Se modifico una unidad llamada ${body.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    return NextResponse.json(data[0]);
};


export const DELETE = async (
    req: Request,
    { params }: { params: { unitId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const response = await fetch(`${nextLink}/api/units/${params.unitId}`, {
        method: "GET",
    })

    const unitToDelete = await response.json();

    const data = await database.delete(units)
        .where(eq(units.id, params.unitId)).returning();

    if (user != null) {
        const response = await fetch(`${nextLink}/api/actions`, {
            method: "GET",
        })

        const data = await response.json()
        await fetch(`${nextLink}/api/actions`, {
            method: "POST",
            body: JSON.stringify({
                "actionId": data.length + 1,
                "userName": `${user.firstName} ${user.lastName} (admin)`,
                "actionName": `Se elimino una unidad llamada ${unitToDelete.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }


    return NextResponse.json(data[0]);
};