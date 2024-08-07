import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import database from "@/database/drizzle";
import { lessons } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { currentUser } from "@clerk/nextjs/server";

const nextLink = process.env.NEXT_PUBLIC_URL!;

export const GET = async (
    req: Request,
    { params }: { params: { lessonId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    // if (user != null) {
    //     if (!adminIds.includes(user.id)) {
    //         return new NextResponse("Sin autorización", { status: 401 });
    //     }
    // }

    const data = await database.query.lessons.findFirst({
        where: eq(lessons.id, params.lessonId),
    });

    return NextResponse.json(data);
};


export const PUT = async (
    req: Request,
    { params }: { params: { lessonId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    // if (user != null) {
    //     if (!adminIds.includes(user.id)) {
    //         return new NextResponse("Sin autorización", { status: 401 });
    //     }
    // }

    const body = await req.json();

    const data = await database.update(lessons).set({
        ...body,
    }).where(eq(lessons.id, params.lessonId)).returning();

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
                "actionName": `Se modifico una leccion llamada ${body.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    return NextResponse.json(data[0]);
};


export const DELETE = async (
    req: Request,
    { params }: { params: { lessonId: number } },
) => {

    const adminIds = isAdmin();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const response = await fetch(`${nextLink}/api/lessons/${params.lessonId}`, {
        method: "GET",
    })

    const lessonToDelete = await response.json();

    const data = await database.delete(lessons)
        .where(eq(lessons.id, params.lessonId)).returning();

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
                "actionName": `Se creo una leccion llamada ${lessonToDelete.title}`,
                "createdAt": (new Date).toLocaleString()
            })
        })
    }

    return NextResponse.json(data[0]);
};