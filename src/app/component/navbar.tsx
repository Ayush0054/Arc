import { Skeleton } from "@/components/ui/skeleton";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [userButtonReady, setUserButtonReady] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate the loading of the UserButton component
    const timeoutId = setTimeout(() => {
      setUserButtonReady(true);
    }, 2000); // Set the timeout to 2000ms (2 seconds) for demonstration purposes

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="flex lg:justify-end justify-between  p-4 border-b-2  ">
      <a
        className="font-bold text-3xl block lg:hidden text-center"
        // onClick={() => {
        //   push(`/feed`);
        // }}
      >
        ARC
      </a>
      {!userButtonReady ? (
        <Skeleton className="h-10 w-10 rounded-full" />
      ) : (
        <UserButton afterSignOutUrl="/" />
      )}
    </div>
  );
}

export default Navbar;
