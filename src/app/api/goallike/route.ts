import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  try {
    const user = await currentUser();
    if (!user) {
      return redirectToSignIn();
    }
    // Check if the user has already liked the goal

    const existingLike = await prisma.likes.findUnique({
      where: {
        goalId_profileId: {
          goalId: body.goalId,
          profileId: user.id,
        },
      },
    });
    console.log(existingLike);

    if (existingLike) {
      return await unlike(body, user);
    }

    const newLike = await prisma.likes.create({
      data: {
        Goal: { connect: { id: body.goalId } },
        profile: { connect: { userId: user.id } },
      },
    });
    return NextResponse.json(newLike, { status: 200 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error creating goal" }, { status: 500 });
  }
}
const unlike = async (body: any, user: any) => {
  // Delete the like
  const deletedLike = await prisma.likes.deleteMany({
    where: {
      goalId: body.goalId,
      profileId: user.id,
    },
  });

  // return deletedLike;
  return NextResponse.json(deletedLike, { status: 200 });
};
export async function GET(req: Request, res: Response) {
  const body = await req.json();
  try {
    const likes = await prisma.likes.findMany({
      where: {
        goalId: body.params.goalId,
      },
    });
    return NextResponse.json(likes, { status: 200 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error getting likes" }, { status: 500 });
  }
}
