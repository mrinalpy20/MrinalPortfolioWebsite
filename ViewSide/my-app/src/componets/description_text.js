import React from "react";
import ".././output.css";

function DescText(props) {
  return (
    <div
      style={{
        width: props.w || "300px",
        // Default width
      }}
      className="relative flex flex-col "
    >
      <div
        className={`${props.textSize || "text-xl"} ${
          props.textColor || "text-[#d9d9d9]"
        } ${props.textAlign || "text-center"} font-normal font-outfit ${
          props.lh || "leading-none"
        }`}
      >
        {props.text}
      </div>
    </div>
  );
}

export default DescText;
