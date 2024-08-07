import { NextResponse } from "next/server";
import database from "@/database/drizzle"
import { units } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { currentUser } from "@clerk/nextjs/server";

const nextLink = process.env.NEXT_PUBLIC_URL!;

export const GET = async () => {
    
    const adminIds = isAdmin();

    const user = await currentUser();

    // if (user != null) {
    //     if (!adminIds.includes(user.id)) {
    //         return new NextResponse("Sin autorización", { status: 401 });
    //     }
    // }

    const data = await database.query.units.findMany();

    return NextResponse.json(data);
;}


export const POST = async (req: Request) => {
    
    const adminIds = isAdmin();

    const user = await currentUser();

    // if (user != null) {
    //     if (!adminIds.includes(user.id)) {
    //         return new NextResponse("Sin autorización", { status: 401 });
    //     }
    // }
    
    const body = await req.json();

    const data = await database.insert(units).values({
        ...body,
    }).returning();

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
                "actionName": `Se creo una unidad llamada ${body.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    return NextResponse.json(data[0]);
};