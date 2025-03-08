import React, { useState } from "react";
import { X } from "lucide-react";
import ".././output.css";
import Button from "./button";

function MailBox() {
  return (
    <div className="w-[700px] h-[500px]  z-10 ml-[150px] rounded-xl bg-[#161819] flex flex-col">
      <button className=" flex flex-row pt-2 justify-end pr-3">
        <X className="text-white w-6 h-6" />
      </button>
      <div class="w-[88%] h-[10%] relative bg-[#272829] rounded-xl mt-2 ml-[5.5%] overflow-hidden">
        <div class="w-[100%] h-[100%] left-[20px] mt-3 absolute text-white/60 text-lg font-semibold font-['Outfit'] leading-normal">
          Name
        </div>
      </div>
      <div class="w-[88%] h-[10%] relative bg-[#272829] rounded-xl mt-3 ml-[5.5%] overflow-hidden">
        <div class="w-[100%] h-[100%] left-[20px] mt-3 absolute text-white/60 text-lg font-semibold font-['Outfit'] leading-normal">
          Email
        </div>
      </div>
      <div class="w-[88%] h-[42%] relative bg-[#272829] rounded-xl mt-3 ml-[5.5%] overflow-hidden">
        <div class="w-[100%] h-[100%] left-[20px] mt-3 absolute text-white/60 text-lg font-semibold font-['Outfit'] leading-normal">
          Message
        </div>
      </div>
      <div className="ml-[5.5%]">
        <Button width="w-[93%]" mt="3" color="bg-[#914bf1]" text="Send" />
      </div>
    </div>
  );
}

export default MailBox;
