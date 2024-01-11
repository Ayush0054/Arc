"use client";
import { initialProfile } from "@/lib/createprofile";
import axios from "axios";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar";
import { Button } from "@/components/ui/button";
import { Sheets } from "../component/micro/sheets";

function Page() {
  const [user, setUser] = useState();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [completionDate, setCompletionDate] = useState<string>("");
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
        <Sheets
          name={name}
          setName={setName}
          description={description}
          //@ts-ignore
          setDescription={setDescription}
          type={type}
          setType={setType}
          completionDate={completionDate}
          setCompletionDate={setCompletionDate}
        />
      </div>
    </div>
  );
}

export default Page;
