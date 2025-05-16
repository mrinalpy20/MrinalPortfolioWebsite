import React, { useState } from "react";
import ".././output.css";
import DescText from "./description_text";

function QuestionCard(props) {
  const [open, setOpen] = useState(false);

  return (
    <button type="button" onClick={() => setOpen(!open)} className="w-full">
      <div
        className={`${props.w || "max-w-[705px] w-full"} ${
          open ? props.h : props.ht
        } mt-3 flex bg-[#272829] rounded-xl overflow-hidden transition-all duration-300`}
      >
        {/* Left Section */}
        <div className="w-[93%] flex flex-col items-start p-3">
          <div className="text-white text-lg font-semibold font-['Outfit'] leading-normal text-left">
            {props.text}
          </div>
          {open && (
            <div className="pt-2">
              <DescText
                w="100%"
                text={props.ans}
                textAlign="text-left"
                textSize="text-lg"
                lh="leading-med"
              />
            </div>
          )}
        </div>

        {/* Icon Section */}
        <div className="flex pt-3 pr-4">
          <i
            className={`fa-solid text-lg transition-transform duration-300 ${
              open ? "fa-angle-up text-purple-500" : "fa-angle-down text-white"
            }`}
          ></i>
        </div>
      </div>
    </button>
  );
}

export default QuestionCard;
