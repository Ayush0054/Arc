"use client";
import React, { useLayoutEffect, useState } from "react";
import Goals from "../components/goals";
import Layout from "@/app/component/layout";
import { getGoalsbyUserId } from "./action";
interface Params {
  params: { id: string };
}
function Page({ params }: Params) {
  const [goal, setGoal] = useState([]);
  const getGoals = async () => {
    const response = await getGoalsbyUserId(params.id);
    console.log(response);
    setGoal(response);
  };
  useLayoutEffect(() => {
    getGoals();
  }, []);
  return (
    <Layout>
      <Goals goal={goal} setGoal={setGoal} />
    </Layout>
  );
}

export default Page;
