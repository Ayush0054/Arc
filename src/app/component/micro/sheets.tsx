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
import { DatePicker } from "./datepicker";
import axios from "axios";
import { useState } from "react";

export function Sheets() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [completionDate, setCompletionDate] = useState<Date>();

  const createGoal = async () => {
    const data = {
      name: name,
      description: description,
      type: type,
      completiontime: completionDate,
      image: "",
      status: "",
      completionBanner: "",
    };

    try {
      const response = await axios.post("/api/goal", data);
      console.log(response);
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=" m-4 text-white">Add arc</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle>Y</SheetTitle> */}
          <SheetDescription>Add Your arc</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              className="col-span-3"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input
              className="col-span-3"
              autoComplete="off"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Type
            </Label>
            <Input
              className="col-span-3"
              autoComplete="off"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Completion Date
            </Label>
            {/* <Input id="username" className="col-span-3" autoComplete="off" /> */}
            <DatePicker
              completionDate={completionDate}
              setCompletionDate={setCompletionDate}
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              className=" m-4 text-white "
              onClick={createGoal}
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
