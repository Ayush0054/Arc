"use client";
import React, { useLayoutEffect, useState } from "react";

import Layout from "@/app/component/layout";
import { getGoalsbyUserId } from "./action";
import Goals from "@/components/profile/goals";
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
      {goal.length != 0 ? (
        <Goals goal={goal} setGoal={setGoal} />
      ) : (
        <div>Start your first goal</div>
      )}
    </Layout>
  );
}

export default Page;
