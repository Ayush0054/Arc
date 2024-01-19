"use server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();
export const getGoalProfileId = async (id: any) => {
  const profile = await prisma.profile.findUnique({
    where: {
      userId: id,
      // Assuming you have a way to link GoalProgress with a user
    },
  });
  console.log(profile);

  // revalidatePath(`/goals/${Id}`);
  return profile;
};
