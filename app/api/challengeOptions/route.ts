import { NextResponse } from "next/server";

import database from "@/database/drizzle"
import { challengeOptions } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async () => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.challengeOptions.findMany();

    return NextResponse.json(data);
;}


export const POST = async (req: Request) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }
    
    const body = await req.json();

    const data = await database.insert(challengeOptions).values({
        ...body,
    }).returning();

    return NextResponse.json(data[0]);
};