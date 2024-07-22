import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import database from "@/database/drizzle";
import { recipesX } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { currentUser } from "@clerk/nextjs/server";

const nextLink = process.env.NEXT_PUBLIC_URL!;

export const GET = async (
    req: Request,
    { params }: { params: { recipeId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const data = await database.query.recipesX.findFirst({
        where: eq(recipesX.id, params.recipeId),
    });

    return NextResponse.json(data);
};


export const PUT = async (
    req: Request,
    { params }: { params: { recipeId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const body = await req.json();

    const data = await database.update(recipesX).set({
        ...body,
    }).where(eq(recipesX.id, params.recipeId)).returning();

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
                "actionName": `Modifico una receta llamada ${body.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    return NextResponse.json(data[0]);
};


export const DELETE = async (
    req: Request,
    { params }: { params: { recipeId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const response = await fetch(`${nextLink}/api/recipes/${params.recipeId}`, {
        method: "GET",
    })

    const recipeToDelete = await response.json();

    const data = await database.delete(recipesX)
        .where(eq(recipesX.id, params.recipeId)).returning();

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
                "actionName": `Elimino un curso llamado ${recipeToDelete.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    return NextResponse.json(data[0]);
};