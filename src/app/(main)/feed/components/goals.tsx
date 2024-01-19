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
import { getGoalProfileId } from "../action";
import { useRouter } from "next/navigation";

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
      {goal.map((g) => (
        <Card
          key={g.id}
          className=" flex flex-col justify-between p-8 m-3 w-[600px] h-[200px]"
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
              <CardDescription>{g.description}</CardDescription>
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
            <Button
              variant="outline"
              onClick={() => like(g.id)}
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Like
            </Button>
            <Button
              variant="outline"
              onClick={() => dislike(g.id)}
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Disike
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Comments
            </Button>
          </div>
        </Card>
      ))}
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export default Goals;
