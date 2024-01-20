import { Sheets } from "@/app/component/micro/sheets";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function FeedSidebar() {
  const { push } = useRouter();
  const { userId } = useAuth();
  return (
    <div className=" bg-[#ffffff] flex flex-col gap-5 w-[440px] h-[100vh] pt-5  border-r-2  ">
      <div className=" flex flex-col gap-5">
        <a
          className="font-bold text-3xl text-center"
          onClick={() => {
            push(`/feed`);
          }}
        >
          ARC
        </a>
        <Sheets />
      </div>
      <div className=" flex flex-col gap-16 items-center">
        <button
          className=" text-gray-500 hover:text-gray-400 flex gap-3 items-center mx-5  "
          onClick={() => {
            push(`/profile/${userId}`);
          }}
        >
          Your Profile
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
