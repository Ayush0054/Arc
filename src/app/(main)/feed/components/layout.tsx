import Navbar from "@/app/component/navbar";
import React from "react";
import FeedSidebar from "./feedSidebar";

function Layout({ children }) {
  return (
    <div>
      <div className=" flex justify-between">
        <FeedSidebar />
        <div className=" w-[100vw] ">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
