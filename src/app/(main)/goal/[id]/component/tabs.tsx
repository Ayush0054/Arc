"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

function Tab({ goalId }: { goalId: any }) {
  return (
    <div>
      <Tabs defaultValue="account" className="flex flex-col items-center">
        <div className=" flex  items-center">
          <TabsList className="w-[200px]  ">
            <TabsTrigger value="progress">Goal Proggress</TabsTrigger>
            <TabsTrigger value="streak">Streak</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="progress" className=" ">
          <div className="  flex justify-evenly   ">
            <h1 className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              perspiciatis iste, est quas magnam consequuntur amet ipsa modi
              quasi architecto tempore libero perferendis beatae eos, non id?
              Nam, perferendis aut?
            </h1>
            <h1 className="text-lg text-gray-400  ">updated 2 hours ago</h1>
          </div>
        </TabsContent>
        <TabsContent value="streak">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Tab;
