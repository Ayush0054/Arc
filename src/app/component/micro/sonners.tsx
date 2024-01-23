"use client";
import React from "react";
// import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
function Sonners({ sonnerTitle, sonnerDes }) {
  return (
    <div
      // variant="outline"
      onClick={() =>
        toast("Goal has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "view",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Submit
    </div>
  );
}

export default Sonners;
