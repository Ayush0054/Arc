import { UserButton } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-end bg-white p-4 ">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
