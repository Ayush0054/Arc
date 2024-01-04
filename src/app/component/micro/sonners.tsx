"use client";
import React from "react";
// import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
function Sonners() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Goal has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Submit
    </Button>
  );
}

export default Sonners;
