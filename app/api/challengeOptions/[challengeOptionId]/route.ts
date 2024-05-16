import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import database from "@/database/drizzle";
import { challengeOptions } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async ( 
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.challengeOptions.findFirst({
        where: eq(challengeOptions.id, params.challengeOptionId),
    });

    return NextResponse.json(data);
};


export const PUT = async ( 
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const body = await req.json();

    const data = await database.update(challengeOptions).set({
        ...body,
    }).where(eq(challengeOptions.id, params.challengeOptionId)).returning();

    return NextResponse.json(data[0]);
};


export const DELETE = async ( 
    req: Request,
    { params }: { params: { challengeOptionId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.delete(challengeOptions)
        .where(eq(challengeOptions.id, params.challengeOptionId)).returning();

    return NextResponse.json(data[0]);
};