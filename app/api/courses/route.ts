import { NextResponse } from "next/server";

import database from "@/database/drizzle"
import { courses } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async () => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.courses.findMany();

    return NextResponse.json(data);
;}


export const POST = async (req: Request) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }
    
    const body = await req.json();

    const data = await database.insert(courses).values({
        ...body,
    }).returning();

    return NextResponse.json(data[0]);
};