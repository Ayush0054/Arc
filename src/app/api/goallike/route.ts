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
    const existingLike = await prisma.likes.findFirst({
      where: {
        goalId: body.goalId,
        UserId: user.id,
      },
    });

    if (existingLike) {
      return await unlike(body, user);
    }

    // Create a new like
    const newLike = await prisma.likes.create({
      data: {
        goalId: body.goalId,
        // User: { connect: { userId: user.id } },
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
const unlike = async (body, user) => {
  // Delete the like
  const deletedLike = await prisma.likes.deleteMany({
    where: {
      goalId: body.goalId,
      UserId: user.id,
    },
  });

  return deletedLike;
};
