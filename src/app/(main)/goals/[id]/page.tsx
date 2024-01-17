"use client";
import React, { useEffect, useState } from "react";
import { getGoalbyId, getdislikesbygoalId, getlikesbygoalId } from "./action";
import Layout from "../../feed/components/layout";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
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
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();
  const getgoal = async () => {
    console.log(params.id);
    const res = await getGoalbyId(params.id);
    console.log(res);
    setDatas(res);
    const lk = await getlikesbygoalId(params.id);
    console.log(lk);
    setLikes(lk);
    const dk = await getdislikesbygoalId(params.id);
    console.log(dk);
    setDislikes(dk);
  };
  useEffect(() => {
    getgoal();
  }, []);

  return (
    <div>
      <Layout>
        <div className=" flex flex-col justify-between p-8 m-3 ">
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
            ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati
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
      </Layout>
    </div>
  );
}

export default Page;
