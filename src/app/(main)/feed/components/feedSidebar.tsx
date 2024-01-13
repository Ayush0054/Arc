import { Sheets } from "@/app/component/micro/sheets";
import React from "react";

function FeedSidebar() {
  return (
    <div className=" bg-[#ffffff] flex flex-col gap-5 w-[240px] h-[100vh] pt-5 border border-l-2 ">
      <div className=" flex flex-col gap-5">
        <h1 className="font-bold text-3xl text-center">ARC</h1>
        <Sheets />
      </div>
      <div className=" flex flex-col gap-16 items-center">
        <button className=" text-gray-500 hover:text-gray-400 flex gap-3 items-center mx-5  ">
          Dashboard
        </button>
        <button className=" text-gray-500 hover:text-gray-400 flex gap-3 items-center mx-5  ">
          Dashboard
        </button>
        <button className=" text-gray-500 hover:text-gray-400 flex gap-3 items-center mx-5  ">
          Dashboard
        </button>
        <button className=" text-gray-500 hover:text-gray-400 flex gap-3 items-center mx-5  ">
          Dashboard
        </button>
        <button className=" text-gray-500 hover:text-gray-400 flex gap-3 items-center mx-5  ">
          Dashboard
        </button>
        <button className=" text-gray-500 hover:text-gray-400 flex gap-3 items-center mx-5  ">
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default FeedSidebar;
