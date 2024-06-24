import { NextResponse } from "next/server";
import { EmailAddress, currentUser } from "@clerk/nextjs/server";
import database from "@/database/drizzle";
import { userProgress } from "@/database/schema";
import { isAdmin } from "@/lib/admin";

export const GET = async () => {
  const adminIds = isAdmin();

  const user = await currentUser();

  if (user != null) {
    if (!adminIds.includes(user.id)) {
      return new NextResponse("Sin autorización", { status: 401 });
    }
  }

  const data = await database.query.userProgress.findMany();
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    newData[i] = {
      id: data[i].userId,
      userName: data[i].userName,
      emailAddress: data[i].email.split("{")[2].split(`\"`)[7].split("\\")[0],
      userImageSrc: data[i].userImageSrc,
      activeCourseId: data[i].activeCourseId,
      hearts: data[i].hearts,
      points: data[i].points,
      createdAt: new Date(Number(data[i].createdAt)),
    };
  }

  return NextResponse.json(newData);
};

export const POST = async (req: Request) => {
  const adminIds = isAdmin();

  const user = await currentUser();

  if (user != null) {
    if (!adminIds.includes(user.id)) {
      return new NextResponse("Sin autorización", { status: 401 });
    }
  }

  const body = await req.json();

  const data = await database
    .insert(userProgress)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
