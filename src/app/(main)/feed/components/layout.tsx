import Navbar from "@/app/component/navbar";
import React from "react";
import FeedSidebar from "./feedSidebar";

function Layout({ children }: { children: any }) {
  return (
    <div>
      <div className=" flex justify-between">
        <FeedSidebar />
        <div className=" w-[100vw] ">
          <Navbar />
          {children}
        </div>
        {/* <div className=" bg-[#ffffff] flex flex-col gap-5 w-[440px] h-[100vh] pt-5  border-l-2  "></div> */}
      </div>
    </div>
  );
}

export default Layout;
