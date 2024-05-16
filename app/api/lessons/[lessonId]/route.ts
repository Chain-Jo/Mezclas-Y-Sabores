import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import database from "@/database/drizzle";
import { lessons } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async ( 
    req: Request,
    { params }: { params: { lessonId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.lessons.findFirst({
        where: eq(lessons.id, params.lessonId),
    });

    return NextResponse.json(data);
};


export const PUT = async ( 
    req: Request,
    { params }: { params: { lessonId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const body = await req.json();

    const data = await database.update(lessons).set({
        ...body,
    }).where(eq(lessons.id, params.lessonId)).returning();

    return NextResponse.json(data[0]);
};


export const DELETE = async ( 
    req: Request,
    { params }: { params: { lessonId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.delete(lessons)
        .where(eq(lessons.id, params.lessonId)).returning();

    return NextResponse.json(data[0]);
};