"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaComment } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createComment } from "../../app/(main)/feed/action";
import { useRouter } from "next/navigation";
function CommentModal({ id }) {
  const [img, setImg] = useState("");
  const [cmt, setCmt] = useState("");
  const { push } = useRouter();
  const comment = async () => {
    const cmts = await createComment(id, cmt, img);
    console.log(cmts);
    push(`/goal/${id}`);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          {" "}
          <FaComment />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Comment</DialogTitle>
            <div className=" flex flex-col items-end m-5  ">
              <Textarea
                id="name"
                placeholder="comment"
                value={cmt}
                onChange={(e) => setCmt(e.target.value)}
                className="  outline-none  m-5 col-span-3"
              />
              <div className=" flex justify-between items-center">
                <Input
                  id="name"
                  placeholder="image url"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="  outline-none  m-5 col-span-3"
                />
                <Button
                  className="bg-green-500  "
                  type="submit"
                  onClick={comment}
                >
                  Save changes
                </Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CommentModal;
