"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { getGoalsbyUserId } from "../[id]/action";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import CommentModal from "../../../../components/feed/commentModal";
// import CommentModal from "./commentModal";
import { useAuth } from "@clerk/nextjs";
function Goals({ goal, setGoal }: { goal: any; setGoal: any }) {
  const { userId } = useAuth();
  const { push } = useRouter();

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
  ];
  // create like
  const like = async (id: any) => {
    const data = {
      goalId: id,
    };

    try {
      const response = await axios.post("/api/goallike", data);
      console.log(response);
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };

  // create dislike
  const dislike = async (id: any) => {
    const data = {
      goalId: id,
    };

    try {
      const response = await axios.post("/api/goaldislike", data);
      console.log(response);
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };
  return (
    <div className=" ">
      <div>{/* <h1 className="text-2xl font-bold">Your Goals</h1> */}</div>
      <div className="m-5">
        {goal.map((g: any) => (
          <div
            key={g.id}
            className=" flex flex-col justify-between p-8 m-3   border-b-2"
          >
            <div className=" flex justify-between items-center">
              <div className=" w-[600px]">
                <div className=" flex justify-between">
                  <div>
                    <CardTitle>{g.name}</CardTitle>
                  </div>
                  <h1 className="text-lg font-normal text-gray-500">
                    2024-01-11T17:52:42.463Z
                  </h1>
                </div>
                <CardDescription>
                  {g.description} Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Facere obcaecati delectus dolore praesentium
                  illum quisquam consequatur magni, laborum quos dolorem
                  repellat debitis neque nam nesciunt blanditiis, repellendus
                  quis non vel!{" "}
                </CardDescription>
                <div className=" flex justify-between ">
                  <div
                    onClick={() => like(g.id)}
                    className=" text-lg  flex gap-2 border-none justify-between items-center text-gray-500"
                  >
                    <span>{g.like.length}</span>
                    {g.like.find((like) => like.profileId === userId) ? (
                      <AiFillLike />
                    ) : (
                      <AiOutlineLike className="hover:text-red-500 text-xl" />
                    )}
                  </div>
                  <div
                    onClick={() => dislike(g.id)}
                    className="text-lg flex gap-2 justify-between items-center  border-none  text-gray-500 "
                  >
                    {g.disLike.length}
                    {g.disLike.find((like) => like.profileId === userId) ? (
                      <AiFillDislike />
                    ) : (
                      <AiOutlineDislike className="hover:text-red-500 text-xl" />
                    )}
                  </div>
                  {/* <Button variant="outline" className="border-none  text-gray-500">
              <FaComment />
            </Button> */}
                  <CommentModal id={g.id} />
                </div>
              </div>

              <Button
                className=" mr-10"
                onClick={() => {
                  push(`/goal/${g.id}`);
                }}
              >
                View Goal
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
