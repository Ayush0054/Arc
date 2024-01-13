import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const user = await currentUser();

  try {
    // Check if the user has already liked the goal
    const existingdisLike = await prisma.disLikes.findFirst({
      where: {
        goalId: body.goalId,
        UserId: user.id,
      },
    });

    if (existingdisLike) {
      return await undislike(body, user);
    }

    // Create a new dislike
    const newLike = await prisma.disLikes.create({
      data: {
        goalId: body.goalId,
        UserId: user.id,
        goalProgressId: "",
      },
    });
    return NextResponse.json(newLike, { status: 200 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error creating goal" }, { status: 500 });
  }
}
const undislike = async (body, user) => {
  // Delete the like
  const deletedDisLike = await prisma.disLikes.deleteMany({
    where: {
      goalId: body.goalId,
      UserId: user.id,
    },
  });

  return deletedDisLike;
};
