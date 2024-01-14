"use client";
import { Button } from "@/components/ui/button";

import Form from "./component/form";
import Sonners from "./component/micro/sonners";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" ">
      <div>
        {" "}
        <section className="relative py-20 bg-green-200 transform skew-y-3">
          <div className="container mx-auto px-4 transform -skew-y-3">
            <div className="flex flex-col items-center space-y-4">
              {/* <GoalIcon className="h-16 w-16" /> */}
              <h2 className="text-3xl font-bold">Advanced Strategy Planner</h2>
              <p className="text-gray-700 text-center">
                Plan your strategies with precision using our advanced tools and
                analytics.
              </p>
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-green-600 transform skew-y-3">
          <div className="container mx-auto px-4 transform -skew-y-3">
            <div className="flex flex-col items-center space-y-4">
              {/* <GoalIcon className="h-16 w-16" /> */}
              <h2 className="text-3xl font-bold">Advanced Strategy Planner</h2>
              <p className="text-gray-700 text-center">
                Plan your strategies with precision using our advanced tools and
                analytics.
              </p>
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-green-200 transform skew-y-3">
          <div className="container mx-auto px-4 transform -skew-y-3">
            <div className="flex flex-col items-center space-y-4">
              {/* <GoalIcon className="h-16 w-16" /> */}
              <h2 className="text-3xl font-bold">Advanced Strategy Planner</h2>
              <p className="text-gray-700 text-center">
                Plan your strategies with precision using our advanced tools and
                analytics.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
