import { NextResponse } from "next/server";

import database from "@/database/drizzle"
import { units } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async () => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.units.findMany();

    return NextResponse.json(data);
;}


export const POST = async (req: Request) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }
    
    const body = await req.json();

    const data = await database.insert(units).values({
        ...body,
    }).returning();

    return NextResponse.json(data[0]);
};