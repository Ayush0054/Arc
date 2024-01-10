"use client";
import { initialProfile } from "@/lib/createprofile";
import axios from "axios";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect } from "react";
import Navbar from "../component/navbar";
import { Button } from "@/components/ui/button";
import { Sheets } from "../component/micro/sheets";

function Page() {
  const create = async () => {
    const response = await axios.get("/api/createprofile");
    console.log(response);
  };
  useEffect(() => {
    create();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {/* <Button variant="link">Add goals</Button> */}
        <Sheets />
      </div>
    </div>
  );
}

export default Page;
