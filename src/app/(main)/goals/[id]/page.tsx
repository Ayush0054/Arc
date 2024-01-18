"use client";
import React, { useEffect, useState } from "react";
import {
  createGoalProgress,
  getGoalbyId,
  getLastGoalProgressUpdate,
  getdislikesbygoalId,
  getlikesbygoalId,
} from "./action";
import Layout from "../../feed/components/layout";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Tab from "./component/tabs";
import { Sheets } from "./component/sheet";

interface Params {
  params: { id: string };
}
interface Data {
  name: string;
  createdAt: string;
  type: string;
  description: string;
  completiontime: string;
  iscompleted: string;
  status: string;
}
function Page({ params }: Params) {
  const [datas, setDatas] = useState<Data>();
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState();

  const [progress, setProgress] = useState("");
  // The function created goal progress after checking 24h limit
  const updateGoalProgress = async () => {
    const lastUpdate = await getLastGoalProgressUpdate(params.id);
    console.log(lastUpdate);

    if (isMoreThan24Hours(lastUpdate.dateTime)) {
      const created = await createGoalProgress(params.id, true, progress);
      console.log(created);

      return console.log("Progress updated!");
    } else {
      return console.log("You can only update once every 24 hours.");
    }
  };

  function isMoreThan24Hours(pastDateTime) {
    const currentTime = new Date();
    const pastTime = new Date(pastDateTime);

    // Calculate the time difference in milliseconds
    const timeDifference = currentTime.getTime() - pastTime.getTime();

    // Convert the time difference to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    return hoursDifference > 24;
  }

  //   async function dailyProgressCheck() {
  //     const goals = await getAllGoals();

  //     for (const goal of goals) {
  //       const lastUpdate = await getLastGoalProgressUpdate(goal.id);

  //       if (isMoreThan24Hours(lastUpdate.dateTime)) {
  //         await createGoalProgress(goal.id, goal.userId, false);
  //         // sendEmailNotification(goal.userId);
  //         console.log("failed dawg");
  //       }
  //     }
  //   }

  //get goal by id
  const getgoal = async () => {
    console.log(params.id);
    const res = await getGoalbyId(params.id);
    console.log(res);
    setDatas(res);
    const lk = await getlikesbygoalId(params.id);
    console.log(lk);
    setLikes(lk);

    console.log(lk.length);

    const dk = await getdislikesbygoalId(params.id);

    console.log(dk);
    console.log(dk.length);

    setDislikes(dk);
  };
  useEffect(() => {
    getgoal();
  }, []);

  return (
    <Layout>
      <div className=" flex flex-col items-center">
        <Sheets
          progress={progress}
          setProgress={setProgress}
          updateGoalProgress={updateGoalProgress}
        />
        <div className=" flex flex-col justify-between  p-8 m-3 ">
          <div className=" flex justify-between">
            <div>
              <CardTitle>{datas?.name}</CardTitle>
            </div>
            <h1 className="text-lg font-normal text-gray-500">
              {/* {datas.createdAt} */}
            </h1>
            <div className=" text-gray-600">{datas?.type}</div>
          </div>
          <Image alt="mauj masti" src={datas?.image}></Image>
          <CardDescription className=" text-lg">
            {datas?.description} Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Facere obcaecati delectus dolore praesentium illum
            quisquam consequatur magni, laborum quos dolorem repellat debitis
            neque nam nesciunt blanditiis, repellendus quis non vel! Lorem,
            ipsum dolor sit amet con sectetur adipisicing elit. Facere obcaecati
            delectus dolore praesentium illum quisquam consequatur magni,
            laborum quos dolorem repellat debitis neque nam nesciunt blanditiis,
            repellendus quis non vel! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Facere obcaecati delectus dolore praesentium illum
            quisquam consequatur magni, laborum quos dolorem repellat debitis
            neque nam nesciunt blanditiis, repellendus quis non vel!
          </CardDescription>

          <div className=" flex items-center justify-evenly">
            {/* <h1>{datas.completiontime}</h1> */}
            <h1>{datas?.iscompleted}</h1>
            <h1>{datas?.status}</h1>
          </div>
          <div>total likes </div>
        </div>
        <Tab goalId={params.id} />
      </div>
    </Layout>
  );
}

export default Page;
