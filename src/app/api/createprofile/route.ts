import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";
import { initialProfile } from "@/lib/createprofile";
const prisma = new PrismaClient();
export async function GET(req: Request, res: Response) {
  const user = await currentUser();
  console.log(user);

  //   const body = await req.json();
  try {
    // const newEntry = await prisma.profile.create({
    //   data: {
    //     userId: user.id as string,
    //     name: `${user.firstName} ${user.lastName}`,
    //     email: user.emailAddresses[0].emailAddress,
    //     phone: user.phoneNumbers[0].phoneNumber,
    //     userName: user.username,
    //   },
    // });
    const p = await initialProfile();
    return NextResponse.json(p, { status: 200 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Error creating question" },
      { status: 500 }
    );
  }
}
