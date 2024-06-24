import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import database from "@/database/drizzle";
import { userProgress } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async ( 
    req: Request,
    { params }: { params: { id: string } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.units.findFirst({
        where: eq(userProgress.userId, params.id),
    });
    

    return NextResponse.json(data);
};


export const PUT = async ( 
    req: Request,
    { params }: { params: { userId: string } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const body = await req.json();

    const data = await database.update(userProgress).set({
        ...body,
    }).where(eq(userProgress.userId, params.userId)).returning();

    return NextResponse.json(data[0]);
};


export const DELETE = async ( 
    req: Request,
    { params }: { params: { userId: string } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.delete(userProgress)
        .where(eq(userProgress.userId, params.userId)).returning();

    return NextResponse.json(data[0]);
};