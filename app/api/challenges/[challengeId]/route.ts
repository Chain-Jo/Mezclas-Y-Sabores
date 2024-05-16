import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import database from "@/database/drizzle";
import { challenges } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async ( 
    req: Request,
    { params }: { params: { challengeId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.challenges.findFirst({
        where: eq(challenges.id, params.challengeId),
    });

    return NextResponse.json(data);
};


export const PUT = async ( 
    req: Request,
    { params }: { params: { challengeId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const body = await req.json();

    const data = await database.update(challenges).set({
        ...body,
    }).where(eq(challenges.id, params.challengeId)).returning();

    return NextResponse.json(data[0]);
};


export const DELETE = async ( 
    req: Request,
    { params }: { params: { challengeId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.delete(challenges)
        .where(eq(challenges.id, params.challengeId)).returning();

    return NextResponse.json(data[0]);
};