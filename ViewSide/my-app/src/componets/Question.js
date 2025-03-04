import React, { useState } from "react";
import ".././output.css";
import DescText from "./description_text";

function QuestionCard(props) {
  return (
    <div className="w-[705px] h-[60px] mt-[12px]  flex flex-row bg-[#272829] rounded-xl  overflow-hidden">
      <div className="w-[95%] ">
        <div
          class="w-[100%] ml-[5%] mt-[2.3%]
         text-white text-lg font-semibold font-['Outfit'] leading-normal flex flex-col justify-center place-items-start"
        >
          {props.text}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <i className="fa-solid fa-angle-down text-white-500"></i>
      </div>
    </div>
  );
}

export default QuestionCard;
