"use server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
export async function getGoalbyId(Id: any) {
  const user = await currentUser();
  if (!user) {
    return redirectToSignIn();
  }
  // console.log(user);

  const goal = await prisma.goal.findUnique({
    where: {
      id: Id,
      // checked: false,
    },
  });
  // revalidatePath(`/goals/${Id}`);
  return goal;
}
export async function getlikesbygoalId(Id: any) {
  const user = await currentUser();
  if (!user) {
    return redirectToSignIn();
  }
  // console.log(user);

  const likes = await prisma.likes.findMany({
    where: {
      goalId: Id,
    },
  });
  // revalidatePath(`/goals/${Id}`);
  console.log(user);

  return likes;
}

export async function getdislikesbygoalId(Id: any) {
  const user = await currentUser();
  if (!user) {
    return redirectToSignIn();
  }
  // console.log(user);

  const disLikes = await prisma.disLikes.findMany({
    where: {
      goalId: Id,
    },
  });
  // revalidatePath(`/goals/${Id}`);
  console.log(user);

  return disLikes;
}
