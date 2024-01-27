import Navbar from "@/app/component/navbar";
import React from "react";
import FeedSidebar from "./feedSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

function Layout({ children }: { children: any }) {
  return (
    <div>
      <div className=" flex justify-between">
        <FeedSidebar />
        <div className=" w-[100vw] ">
          <Navbar />
          <ScrollArea className="h-[90vh] ">{children}</ScrollArea>
        </div>
        {/* <div className=" bg-[#ffffff] flex flex-col gap-5 w-[440px] h-[100vh] pt-5  border-l-2  "></div> */}
      </div>
    </div>
  );
}

export default Layout;
