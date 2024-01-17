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

function Goals() {
  const { push } = useRouter();
  const [goal, setGoal] = useState([]);
  const getGoals = async () => {
    const response = await axios.get("/api/goal");
    setGoal(response.data);
    console.log(response);
  };
  useLayoutEffect(() => {
    getGoals();
  }, []);
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
  ];
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
  //   const ids = ()=>{
  //     push(`/wish/${name2}`);
  //   }
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
    <div className=" ">
      <div>{/* <h1 className="text-2xl font-bold">Your Goals</h1> */}</div>
      <div className="m-5">
        {goal.map((g) => (
          <div className=" flex justify-evenly items-center">
            <div
              key={g.id}
              className=" flex flex-col justify-between p-8 m-3 w-[600px] h-[200px]  border-b-2"
            >
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
                illum quisquam consequatur magni, laborum quos dolorem repellat
                debitis neque nam nesciunt blanditiis, repellendus quis non vel!{" "}
              </CardDescription>
            </div>
            <Button
              className=" mr-10"
              onClick={() => {
                push(`/goals/${g.id}`);
              }}
            >
              View Goal
            </Button>
          </div>
        ))}
        {/* <Collapsible>
          <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
          <CollapsibleContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible> */}
      </div>
    </div>
  );
}

export default Goals;
