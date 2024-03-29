"use client";
import { initialProfile } from "@/lib/createprofile";
import axios from "axios";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
// import Navbar from "../component/navbar";
import { Button } from "@/components/ui/button";
import Navbar from "@/app/component/navbar";
import { Sheets } from "@/app/component/micro/sheets";
import Layout from "../../component/layout";
import Goals from "../../../components/feed/goals";
// import { Sheets } from "../component/micro/sheets";

function Page() {
  const create = async () => {
    const response = await initialProfile();
    console.log(response);
  };
  useEffect(() => {
    create();
  }, []);

  return (
    <div className=" ">
      {/* bg-[#f1f5f0] */}
      <Layout>
        <div className=" flex justify-center ">
          <Goals />
        </div>
      </Layout>
    </div>
  );
}

export default Page;
