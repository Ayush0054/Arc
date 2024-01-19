"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { DatePicker } from "./datepicker";
import axios from "axios";
import { useState } from "react";

export function Sheets({
  progress,
  setProgress,
  updateGoalProgress,
}: {
  progress: any;
  setProgress: any;
  updateGoalProgress: any;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className=" m-4 bg-green-600 text-white hover:bg-green-500 hover:text-white"
        >
          Add Progress
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle>Y</SheetTitle> */}
          <SheetDescription>Add Your Goals</SheetDescription>
        </SheetHeader>
        <form action={updateGoalProgress}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                your Progress
              </Label>
              <Input
                className="col-span-3"
                autoComplete="off"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                className=" m-4 bg-green-600 text-white hover:bg-green-500 hover:text-white"
                //   onClick={updateGoalProgress}
              >
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
