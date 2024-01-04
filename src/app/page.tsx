"use client";
import { Button } from "@/components/ui/button";
import { DrawerDemo } from "./component/first";
import Form from "./component/form";
import Sonners from "./component/micro/sonners";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" m-8 ">
      <h1 className="font-bold text-2xl">ARXC </h1>
      <div className="m-10 grid">
        <Button>Click me</Button>
        <DrawerDemo />
        <Form />
        <Sonners />
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
