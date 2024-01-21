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
import {
  getGoalProfileId,
  // getdislikesbygoalId,
  // getlikesbygoalId,
} from "../action";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { FaComment } from "react-icons/fa6";
import CommentModal from "./commentModal";
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

  const [goal, setGoal] = useState([]);

  //fetching goals

  const getGoals = async () => {
    const response = await axios.get("/api/goal");
    setGoal(response.data);
    console.log(response);
  };

  useLayoutEffect(() => {
    getGoals();
  }, []);

  //hardcoded avatar
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
  ];
  // const getlikesandDislikes = async (id) => {
  //   const lk = await getlikesbygoalId(id);
  //   console.log(lk);

  //   console.log(lk.length);

  //   const dk = await getdislikesbygoalId(id);

  //   console.log(dk);
  //   console.log(dk.length);
  // };
  //create like
  const like = async (id) => {
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
  const dislike = async (id) => {
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
    <div className="m-5">
      {goal.map((g: Goal) => (
        <Card
          key={g.id}
          className=" flex flex-col justify-between p-8 m-3 w-[600px] "
        >
          <div className=" mb-8 flex justify-between">
            <div>
              <CardTitle
                onClick={() => {
                  push(`/goal/${g.id}`);
                }}
              >
                {g.name}
              </CardTitle>
              <CardDescription>
                {g.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Explicabo dolorem officia quasi repellendus
                qui ex esse fuga aut sint vero, itaque assumenda corporis quis
                hic unde modi nesciunt numquam facere?
              </CardDescription>
              <a
                onClick={() => {
                  push(`/profile/${g.profileId}`);
                }}
              >
                {g.profile.name}
              </a>
            </div>
            <div onClick={() => console.log("hey")}>
              <AnimatedTooltip items={people} className="h-10 w-10" />
            </div>
          </div>
          <div className=" flex justify-between ">
            <div
              onClick={() => like(g.id)}
              className=" text-lg  flex gap-2 border-none justify-between items-center text-gray-500"
            >
              <span>{g.like.length}</span>
              <AiOutlineLike className="hover:text-red-500 text-xl" />
              {/* <AiFillLike /> */}
            </div>
            <div
              onClick={() => dislike(g.id)}
              className="text-lg flex gap-2 justify-between items-center  border-none  text-gray-500 "
            >
              {g.disLike.length}
              <AiOutlineDislike className="hover:text-red-500 text-xl" />
              {/* <AiFillDislike /> */}
            </div>
            {/* <Button variant="outline" className="border-none  text-gray-500">
              <FaComment />
            </Button> */}
            <CommentModal id={g.id} />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Goals;
