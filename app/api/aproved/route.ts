import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import database from "@/database/drizzle";
import { userAproved } from "@/database/schema";
import { isAdmin } from "@/lib/admin";
import { isSupervisor } from "@/lib/supervisor";

export const GET = async () => {
    const adminIds = isAdmin();
    const supervisorIds = isSupervisor();

    const user = await currentUser();

    if (user != null) {
        if (!adminIds.includes(user.id) && !supervisorIds.includes(user.id)) {
            return new NextResponse("Sin autorización", { status: 401 });
        }
    }

    const data = await database.query.userAproved.findMany();
    return NextResponse.json(data);
};

export const POST = async (req: Request) => {
    const adminIds = isAdmin();
    const supervisorIds = isSupervisor();

    const user = await currentUser();

    // if (user != null) {
    //     if (!adminIds.includes(user.id) && !supervisorIds.includes(user.id)) {
    //         return new NextResponse("Sin autorización", { status: 401 });
    //     }
    // }

    const body = await req.json();
    const data = await database
        .insert(userAproved)
        .values({
            ...body,
        })
        .returning();

    return NextResponse.json(data[0]);
};
