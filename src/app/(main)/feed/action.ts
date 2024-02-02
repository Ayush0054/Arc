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
export const createComment = async (id: any, cmt, img) => {
  const user = await currentUser();
  if (!user) {
    return redirectToSignIn();
  }
  // Check if the user has already liked the goal

  // const existingLike = await prisma.comments.findUnique({
  //   where: {
  //     goalId_profileId: {
  //       goalId: id,
  //       profileId: user.id,
  //     },
  //   },
  // });
  // console.log(existingLike);

  // if (existingLike) {
  //   return await unlike(body, user);
  // }

  const newComment = await prisma.comments.create({
    data: {
      Goal: { connect: { id: id } },
      profile: { connect: { userId: user.id } },
      text: cmt,
      image: img,
    },
  });

  // revalidatePath(`/goals/${Id}`);
  return newComment;
};
export async function getComments(id) {
  if (!id) {
    return "Missing goal ID";
  }

  const comments = await prisma.comments.findMany({
    where: {
      goalId: id,
    },
  });

  return comments;
}
