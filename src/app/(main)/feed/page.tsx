"use client";
import { initialProfile } from "@/lib/createprofile";
import axios from "axios";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
// import Navbar from "../component/navbar";
import { Button } from "@/components/ui/button";
import Navbar from "@/app/component/navbar";
import { Sheets } from "@/app/component/micro/sheets";
import Layout from "./components/layout";
import Goals from "./components/goals";
// import { Sheets } from "../component/micro/sheets";

function Page() {
  const create = async () => {
    const response = await axios.get("/api/createprofile");
    console.log(response);
  };
  useEffect(() => {
    create();
  }, []);

  return (
    <div className="bg-[#F6F6F6]">
      <Layout>
        <Goals />
      </Layout>
    </div>
  );
}

export default Page;
