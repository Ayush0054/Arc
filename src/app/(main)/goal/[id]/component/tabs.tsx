"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import Interaction from "./interaction";
import { Button } from "@/components/ui/button";

function Tab({
  goalId,
  goalProgress,
  Comments,
  likes,
  dislikes,
}: {
  goalId: any;
  goalProgress: any;
  Comments: any;
  dislikes: any;
  likes: any;
}) {
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
                  className="  flex flex-col justify-evenly w-[500px] p-5 m-5  "
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
        <TabsContent value="comments">
          {/* <Button>Comment</Button> */}
          {Comments.map((c) => {
            return (
              <Card className="   min-w-[300px]  w-[500px] m-5 p-5 ">
                <div className=" flex  justify-between">
                  <CardDescription>
                    {" "}
                    {new Date(c.createdAt).toLocaleDateString()}
                  </CardDescription>

                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                    className="h-10 w-10 rounded-full"
                    alt="uop"
                  />
                </div>
                <h1 className="text-lg text-gray-600">
                  {c.text}loda lelo loekdosjkfgoj Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Maxime aliquam dolor dignissimos
                  vel tempora, magni cumque, in quibusdam totam distinctio iste
                  unde quam, minima possimus doloremque rem delectus excepturi
                  cupiditate!
                </h1>
              </Card>
            );
          })}
        </TabsContent>
        <TabsContent value="likes">
          {likes.map((c) => {
            return (
              <Card className="  p-5 min-w-[300px] m-5 ">
                <div className=" flex  justify-between">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                    className="h-10 w-10 rounded-full"
                    alt="uop"
                  />
                  <CardContent>{c.profile.name}</CardContent>
                </div>
                {/* <CardDescription>
                  {" "}
                  {new Date(c.createdAt).toLocaleDateString()}
                </CardDescription> */}
              </Card>
            );
          })}
        </TabsContent>
        <TabsContent value="dislikes">
          {dislikes.map((c) => {
            return (
              <Card className="  p-5 min-w-[300px] m-5">
                <div className=" flex  justify-between">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                    className="h-10 w-10 rounded-full"
                    alt="uop"
                  />
                  <CardContent>{c.profile.name}</CardContent>
                </div>
                {/* <CardDescription>
                  {" "}
                  {new Date(c.createdAt).toLocaleDateString()}
                </CardDescription> */}
              </Card>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Tab;
