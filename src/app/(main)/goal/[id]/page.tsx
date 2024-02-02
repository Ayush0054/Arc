"use client";
import React, { useEffect, useState } from "react";
import {
  createGoalProgress,
  deleteGoalbyId,
  getGoalProgressUpdate,
  getGoalbyId,
  getLastGoalProgressUpdate,
  getcommentsbygoalId,
  getdislikesbygoalId,
  getlikesbygoalId,
} from "./action";
import Layout from "../../../component/layout";
import { CardDescription, CardTitle } from "@/components/ui/card";

import Tab from "./component/tabs";
import { Sheets } from "./component/sheet";

import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface Params {
  params: { id: string };
}
interface Data {
  profileId: string;
  name: string;
  createdAt: string;
  type: string;
  description: string;
  completiontime: string;
  iscompleted: string;
  status: string;
}
function Page({ params }: Params) {
  const { push } = useRouter();
  const { userId } = useAuth();
  const [datas, setDatas] = useState<Data>();
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [goalProgress, setGoalProgress] = useState([]);
  const [Comments, setComments] = useState([]);
  const [progress, setProgress] = useState("");

  // The function created goal progress after checking 24h limit
  const updateGoalProgress = async () => {
    const lastUpdate = await getLastGoalProgressUpdate(params.id);
    console.log(lastUpdate);
    if (lastUpdate === null) {
      const created = await createGoalProgress(params.id, true, progress);
      console.log(created);

      return console.log("Progress updated!");
    }
    if (isMoreThan24Hours(lastUpdate.dateTime)) {
      const created = await createGoalProgress(params.id, true, progress);
      console.log(created);

      return console.log("Progress updated!");
    } else {
      return console.log("You can only update once every 24 hours.");
    }
  };

  //get all progress of given goalid
  const getGoalProgress = async () => {
    const response = await getGoalProgressUpdate(params.id);
    setGoalProgress(response as []);
  };
  function isMoreThan24Hours(pastDateTime: any) {
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
    const res = await getGoalbyId(params.id);

    setDatas(res);
    const lk = await getlikesbygoalId(params.id);

    setLikes(lk);

    const dk = await getdislikesbygoalId(params.id);

    setDislikes(dk);
    const cmt = await getcommentsbygoalId(params.id);
    console.log(cmt);
    setComments(cmt);
  };
  useEffect(() => {
    getgoal();
    getGoalProgress();
  }, []);

  const deletGoal = async () => {
    const res = await deleteGoalbyId(params.id);
    push(`profile/${userId}`);
    console.log(res);
  };
  return (
    <Layout>
      <div className=" flex flex-col items-center">
        {datas?.profileId === userId && (
          <div className=" flex">
            <Sheets
              progress={progress}
              setProgress={setProgress}
              updateGoalProgress={updateGoalProgress}
            />
            <Button className=" m-4  text-white " onClick={deletGoal}>
              Delete
            </Button>
          </div>
        )}
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
          <div className=" flex justify-between gap-4 m-4 ">
            {/* <img
              alt="mauj masti"
              className=" h-[200px] w-[400px] rounded-lg "
              // src={datas?.image}
              src="https://spaces-wp.imgix.net/2016/06/coding-in-the-classroom.png?auto=compress,format&q=50"
            ></img> */}
            <CardDescription className=" text-lg">
              {datas?.description} Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Facere obcaecati delectus dolore praesentium
              illum quisquam consequatur magni, laborum quos dolorem repellat
              debitis neque nam nesciunt blanditiis, repellendus quis non vel!
              Lorem, ipsum dolor sit amet con sectetur adipisicing elit. Facere
              obcaecati delectus dolore praesentium illum quisquam consequatur
              magni, laborum quos dolorem repellat debitis neque nam nesciunt
              blanditiis, repellendus quis non vel! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Facere obcaecati delectus dolore
              praesentium illum quisquam consequatur magni, laborum quos dolorem
              repellat debitis neque nam nesciunt blanditiis, repellendus quis
              non vel!
            </CardDescription>
          </div>

          <div className=" flex items-center justify-evenly">
            {/* <h1>{datas.completiontime}</h1> */}
            <h1>{datas?.iscompleted}</h1>
            <h1>{datas?.status}</h1>
          </div>
        </div>
        <Tab
          datas={datas}
          goalId={params.id}
          goalProgress={goalProgress}
          likes={likes}
          Comments={Comments}
          dislikes={dislikes}
        />
      </div>
    </Layout>
  );
}

export default Page;
