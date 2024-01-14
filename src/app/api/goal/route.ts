import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const user = await currentUser();
  console.log(user);

  const body = await req.json();
  try {
    const user = await currentUser();

    if (!user) {
      return redirectToSignIn();
    }

    const profile = await prisma.profile.findUnique({
      where: {
        userId: user.id,
      },
    });

    console.log(profile);
    const newGoal = await prisma.goal.create({
      data: {
        profile: { connect: { userId: user.id } },
        name: body.name,
        description: body.description,
        type: body.type,
        image: body.image,
        completiontime: body.completiontime,
        status: body.status,
        isCompleted: false,
        completionBanner: "",
      },
    });

    return NextResponse.json(newGoal, { status: 200 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error creating goal" }, { status: 500 });
  }
}
export async function GET(request: Request) {
  try {
    const user = await currentUser();
    const goals = await prisma.goal.findMany();
    return NextResponse.json(goals, { status: 200 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Error retrieving goals" },
      { status: 500 }
    );
  }
}
export async function PATCH(req: Request) {
  const { goalId, name, description, completiontime } = Object.fromEntries(
    req.url
      .split("?")[1]
      .split("&")
      .map((kv) => [kv.split("=")[0], kv.split("=")[1]])
  );
  try {
    const user = await currentUser();
    const updatedGoal = await prisma.goal.update({
      where: {
        id: goalId,
        profileId: user.id,
      },
      data: {
        name: name,
        description: description,
        completiontime: completiontime,
        isCompleted: true,
      },
    });
    return NextResponse.json(updatedGoal, { status: 200 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error updating goal" }, { status: 500 });
  }
}
