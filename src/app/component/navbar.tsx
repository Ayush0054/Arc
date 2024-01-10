import { UserButton } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  return (
    <div className=" m-4 flex justify-between ">
      <h1 className="font-bold text-2xl">ARXC </h1>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
