import { NextResponse } from "next/server";
import database from "@/database/drizzle"
import { recipesX } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { currentUser } from "@clerk/nextjs/server";


export const GET = async () => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const data = await database.query.recipesX.findMany();

    return NextResponse.json(data);
    ;
}


export const POST = async (req: Request) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const body = await req.json();

    const data = await database.insert(recipesX).values({
        ...body,
    }).returning();

    if (user != null) {
        const response = await fetch("http://localhost:3000/api/actions", {
            method: "GET",
        })

        const data = await response.json()
        await fetch("http://localhost:3000/api/actions", {
            method: "POST",
            body: JSON.stringify({
                "actionId": data.length + 1,
                "userName": `${user.firstName} ${user.lastName} (admin)`,
                "actionName": `Creo una receta llamada ${body.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    return NextResponse.json(data[0]);
};