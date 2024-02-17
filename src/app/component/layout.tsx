import Navbar from "@/app/component/navbar";
import React from "react";
import FeedSidebar from "./feedSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheets } from "./micro/sheets";
import { CgProfile } from "react-icons/cg";
function Layout({ children }: { children: any }) {
  return (
    <div>
      <div className=" flex justify-between">
        <FeedSidebar />
        <div className=" lg:w-[100vw] w-full ">
          <Navbar />
          <ScrollArea className="lg:h-[90vh] h-[83vh] ">{children}</ScrollArea>
          <div className=" lg:hidden flex justify-evenly items-center border-t-2">
            <CgProfile className=" text-4xl" />
            <CgProfile className=" text-4xl" />
            <Sheets />
            <CgProfile className=" text-4xl" />
            <CgProfile className=" text-4xl" />
          </div>
        </div>
        <div className=" bg-[#ffffff] hidden lg:flex lg:flex-col gap-5 w-[700px] h-[100vh] pt-5  border-l-2  "></div>
      </div>
    </div>
  );
}

export default Layout;
