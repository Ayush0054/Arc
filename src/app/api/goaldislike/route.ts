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
    const existingdisLike = await prisma.disLikes.findUnique({
      where: {
        goalId_profileId: {
          goalId: body.goalId,
          profileId: user.id,
        },
      },
    });

    if (existingdisLike) {
      return await undislike(body, user);
    }
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
      await unlike(body, user);
    }
    // Create a new dislike
    const newdisLike = await prisma.disLikes.create({
      data: {
        Goal: { connect: { id: body.goalId } },
        profile: { connect: { userId: user.id } },
      },
    });
    return NextResponse.json(newdisLike, { status: 200 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error creating goal" }, { status: 500 });
  }
}
const undislike = async (body: any, user: any) => {
  // Delete the like
  const deletedDisLike = await prisma.disLikes.deleteMany({
    where: {
      goalId: body.goalId,
      profileId: user.id,
    },
  });

  return NextResponse.json(deletedDisLike, { status: 200 });
};
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
