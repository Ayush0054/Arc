"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

function Tab({ goalId, goalProgress }: { goalId: any; goalProgress: any }) {
  console.log(goalProgress);

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
        <TabsContent value="streak">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Tab;
