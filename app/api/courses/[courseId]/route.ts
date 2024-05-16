import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import database from "@/database/drizzle";
import { courses } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async ( 
    req: Request,
    { params }: { params: { courseId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.courses.findFirst({
        where: eq(courses.id, params.courseId),
    });

    return NextResponse.json(data);
};


export const PUT = async ( 
    req: Request,
    { params }: { params: { courseId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const body = await req.json();

    const data = await database.update(courses).set({
        ...body,
    }).where(eq(courses.id, params.courseId)).returning();

    return NextResponse.json(data[0]);
};


export const DELETE = async ( 
    req: Request,
    { params }: { params: { courseId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.delete(courses)
        .where(eq(courses.id, params.courseId)).returning();

    return NextResponse.json(data[0]);
};