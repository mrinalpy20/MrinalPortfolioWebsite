import React, { useState } from "react";
import ".././output.css";
import DescText from "./description_text";

function QuestionCard(props) {
  const [open, setOpen] = useState(false);
  const hider = (open) => {
    setOpen(!open);
  };
  return (
    <button type="button" onClick={() => hider(open)}>
      <div
        className={`w-[705px] ${
          open ? props.h : "h-[65px]  "
        } mt-[12px]  flex flex-row bg-[#272829] rounded-xl  overflow-hidden`}
      >
        <div className="w-[93%] h-[100%] flex flex-col  items-start">
          <div className="text-white text-lg font-semibold font-['Outfit'] leading-normal pl-[3%] pt-[3%]">
            {props.text}
          </div>
          {open && (
            <div className="pl-[3%] pt-[1.5%]">
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
        <div className="flex mt-[3.7%]">
          <i
            className={`fa-solid ${
              open
                ? "fa-angle-up text-purple-500"
                : "fa-angle-down text-white-500"
            }`}
          ></i>
        </div>
      </div>
    </button>
  );
}

export default QuestionCard;
