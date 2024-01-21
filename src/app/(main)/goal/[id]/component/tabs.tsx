"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import Interaction from "./interaction";

function Tab({ goalId, goalProgress }: { goalId: any; goalProgress: any }) {
  console.log(goalProgress);

  return (
    <div>
      <Tabs defaultValue="account" className="flex flex-col items-center">
        <div className=" flex  items-center">
          <TabsList className="w-[450px]  ">
            {/* <TabsTrigger value="interaction">Interactions</TabsTrigger> */}
            <TabsTrigger value="comments">comments</TabsTrigger>
            <TabsTrigger value="likes">likes</TabsTrigger>
            <TabsTrigger value="dislikes">dislikes</TabsTrigger>
            <TabsTrigger value="progress">Goal Proggress</TabsTrigger>
            <TabsTrigger value="streak">Streak</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="progress" className=" ">
          {goalProgress &&
            goalProgress.map((gp: any) => {
              return (
                <Card
                  key={gp.id}
                  className="  flex flex-col justify-evenly w-[500px] p-5  "
                >
                  <div className=" flex justify-between ">
                    <h1 className="text-lmd text-gray-400  ">
                      {new Date(gp.dateTime).toLocaleString()}
                    </h1>
                    <h1 className="text-md text-gray-400  ">
                      is checked{gp.isChecked}
                    </h1>
                  </div>
                  <h1 className="text-lg text-gray-600">
                    {gp.update} Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Perspiciatis repudiandae temporibus
                    tenetur voluptatum facilis hic sapiente unde cupiditate
                    ullam eos, sint, harum corrupti. Architecto eaque officia
                    fuga pariatur sequi consequatur.
                  </h1>
                </Card>
              );
            })}
        </TabsContent>
        {/* <TabsContent value="interaction">
          <Interaction />
        </TabsContent> */}
        <TabsContent value="streak">Change your password here.</TabsContent>
        <TabsContent value="comments">Change your password here.</TabsContent>
        <TabsContent value="likes">Change your password here.</TabsContent>
        <TabsContent value="dislikes">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Tab;
