import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function Form() {
  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="res">Enter Resolution</Label>
        <Input id="res" type="text" />
      </div>
      <div className=" flex items-center justify-evenly">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Goal
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Habit
          </label>
        </div>
      </div>
    </div>
  );
}

export default Form;
