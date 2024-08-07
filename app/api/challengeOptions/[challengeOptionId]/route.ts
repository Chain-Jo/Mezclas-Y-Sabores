import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import database from "@/database/drizzle";
import { challengeOptions } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { currentUser } from "@clerk/nextjs/server";

const nextLink = process.env.NEXT_PUBLIC_URL!;


export const GET = async (
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    // if (user != null) {
    //     if (!adminIds.includes(user.id)) {
    //         return new NextResponse("Sin autorización", { status: 401 });
    //     }
    // }

    const data = await database.query.challengeOptions.findFirst({
        where: eq(challengeOptions.id, params.challengeOptionId),
    });

    return NextResponse.json(data);
};


export const PUT = async (
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    // if (user != null) {
    //     if (!adminIds.includes(user.id)) {
    //         return new NextResponse("Sin autorización", { status: 401 });
    //     }
    // }

    const body = await req.json();

    const data = await database.update(challengeOptions).set({
        ...body,
    }).where(eq(challengeOptions.id, params.challengeOptionId)).returning();

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
                "actionName": `Modifico una respuesta llamada ${body.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    return NextResponse.json(data[0]);
};


export const DELETE = async (
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    // if (user != null) {
    //     if (!adminIds.includes(user.id)) {
    //         return new NextResponse("Sin autorización", { status: 401 });
    //     }
    // }
    // mosca
    const response = await fetch(`${nextLink}/courses/${params.challengeOptionId}`, {
        method: "GET",
    })

    const challengeOptionToDelete = await response.json();

    const data = await database.delete(challengeOptions)
        .where(eq(challengeOptions.id, params.challengeOptionId)).returning();


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
                "actionName": `Elimino una respuesta llamada ${challengeOptionToDelete.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }
    return NextResponse.json(data[0]);
};