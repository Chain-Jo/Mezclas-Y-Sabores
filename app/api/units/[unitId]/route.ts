import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import database from "@/database/drizzle";
import { units } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async ( 
    req: Request,
    { params }: { params: { unitId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.query.units.findFirst({
        where: eq(units.id, params.unitId),
    });

    return NextResponse.json(data);
};


export const PUT = async ( 
    req: Request,
    { params }: { params: { unitId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const body = await req.json();

    const data = await database.update(units).set({
        ...body,
    }).where(eq(units.id, params.unitId)).returning();

    return NextResponse.json(data[0]);
};


export const DELETE = async ( 
    req: Request,
    { params }: { params: { unitId: number } },
) => {
    
    if (!isAdmin()) {
        return new NextResponse("Sin autorización", { status: 401 });
    }

    const data = await database.delete(units)
        .where(eq(units.id, params.unitId)).returning();

    return NextResponse.json(data[0]);
};