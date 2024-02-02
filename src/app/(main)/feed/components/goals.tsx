"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { FaComment } from "react-icons/fa6";
import CommentModal from "./commentModal";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
interface Goal {
  id: number;
  name: string;
  description: string;
  profileId: number;
  profile: {
    id: number;
    name: string;
    email: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
  };
  like: {
    id: number;
    goalId: number;
    profileId: number;
    createdAt: string;
    updatedAt: string;
  }[];
  disLike: {
    id: number;
    goalId: number;
    profileId: number;
    createdAt: string;
    updatedAt: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
function Goals() {
  const { push } = useRouter();
  const { userId } = useAuth();
  const [goal, setGoal] = useState([]);
  //skeleton
  const [goalReady, setGoalReady] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate the loading of the UserButton component
    const timeoutId = setTimeout(() => {
      setGoalReady(true);
    }, 3000); // Set the timeout to 2000ms (2 seconds) for demonstration purposes

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);
  //fetching goals

  const getGoals = async () => {
    const response = await axios.get("/api/goal");
    setGoal(response.data);
    console.log(response);
  };

  useLayoutEffect(() => {
    getGoals();
  }, []);

  //create like
  const like = async (id) => {
    const data = {
      goalId: id,
    };

    try {
      const response = await axios.post("/api/goallike", data);
      console.log(response);
      getGoals();
      toast("you liked an Arc", {});
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
      getGoals();
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };

  return (
    <div className="m-5">
      {!goalReady ? (
        <Card className=" flex flex-col justify-between p-8 m-3 w-[600px] ">
          <div className=" mb-8 flex justify-between">
            <div className="mb-2">
              <Skeleton className="w-24 h-10 bg-gray-200 rounded-lg"></Skeleton>
            </div>
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          <div>
            <Skeleton className="w-full h-32 bg-gray-200 rounded-lg"></Skeleton>
          </div>
        </Card>
      ) : (
        <div>
          {goal.map((g: Goal) => (
            <Card
              key={g.id}
              className=" flex flex-col justify-between p-8 m-3 w-[600px] "
            >
              <div className=" mb-8 flex justify-between">
                <div>
                  <CardTitle
                    className=" mb-2"
                    onClick={() => {
                      push(`/goal/${g.id}`);
                    }}
                  >
                    {g.name}
                  </CardTitle>
                  <CardDescription>
                    {g.description} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Explicabo dolorem officia quasi
                    repellendus qui ex esse fuga aut sint vero, itaque assumenda
                    corporis quis hic unde modi nesciunt numquam facere?
                  </CardDescription>
                </div>
                <div onClick={() => console.log("hey")}>
                  <AnimatedTooltip
                    items={[
                      {
                        id: g.profileId,
                        name: g.profile.name,
                        src: g.profile.image,
                      },
                    ]}
                    // onClick={() => {
                    //   push(`/profile/${g.profileId}`);
                    // }}
                    // className="h-10 w-10"
                  />
                </div>
              </div>
              <div className=" flex justify-between ">
                <div
                  onClick={() => like(g.id)}
                  className=" text-lg  flex gap-2 border-none justify-between items-center text-gray-500"
                >
                  <span>{g.like.length}</span>
                  {g.like.find((like: any) => like.profileId === userId) ? (
                    <AiFillLike className="hover:text-gray-400 text-xl" />
                  ) : (
                    <AiOutlineLike className="hover:text-black text-xl" />
                  )}
                </div>
                <div
                  onClick={() => dislike(g.id)}
                  className="text-lg flex gap-2 justify-between items-center  border-none  text-gray-500 "
                >
                  {g.disLike.length}
                  {g.disLike.find((like: any) => like.profileId === userId) ? (
                    <AiFillDislike className="hover:text-gray-400 text-xl" />
                  ) : (
                    <AiOutlineDislike className="hover:text-black text-xl" />
                  )}
                </div>
                {/* <Button variant="outline" className="border-none  text-gray-500">
              <FaComment />
            </Button> */}
                <CommentModal id={g.id} />
                {/* <Button>C</Button> */}
              </div>
            </Card>
          ))}
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Goals;
