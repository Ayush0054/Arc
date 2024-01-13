import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Goals() {
  const [goal, setGoal] = useState([]);
  const getGoals = async () => {
    const response = await axios.get("/api/goal");
    setGoal(response.data);
    console.log(response);
  };
  useEffect(() => {
    getGoals();
  }, []);

  return (
    <div className="m-5">
      {goal.map((g) => (
        <Card key={g} className="m-3 p-5 w-[500px] h-[150px]">
          <div className=" mb-8">
            <div>
              <CardTitle>{g.name}</CardTitle>
            </div>

            <CardDescription>{g.description}</CardDescription>
          </div>
          <div className=" flex justify-between ">
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Like
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Disike
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Comments
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Goals;
