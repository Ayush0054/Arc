"use server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
export async function getGoalsbyUserId(Id: any) {
  const user = await currentUser();
  if (!user) {
    return redirectToSignIn();
  }
  // console.log(user);

  const goals = await prisma.goal.findMany({
    where: {
      profileId: Id,
    },
    include: {
      profile: {
        select: {
          name: true,
          userName: true,
        },
      },
    },
  });
  revalidatePath(`/profile/${Id}`);
  return goals;
}
