import React from "react";
import ".././output.css";

function DescText(props) {
  return (
    <div className={`flex flex-col w-full max-w-[${props.w || "300px"}]`}>
      <div
        className={`${props.textSize || "text-xl"} 
                    ${props.textColor || "text-[#d9d9d9]"} 
                    ${props.textAlign || "text-center"} 
                    ${props.lh || "leading-none"} 
                    font-normal font-outfit`}
      >
        {props.text}
      </div>
    </div>
  );
}

export default DescText;
