import React from "react";
import ".././output.css";

function ToolCard(props) {
  return (
    <div className="h-full w-full flex flex-row bg-[#272829] rounded-xl transition-colors duration-500 ease-in-out hover:bg-[#914BF1]">
      <div className="flex items-center justify-center w-[40%] h-full">
        <img
          src={props.logo}
          alt="logo"
          className="object-contain"
          style={{ width: props.w || "60%", height: props.h || "70%" }}
        />
      </div>

      <div className="w-[60%] h-full flex flex-col">
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div
            className={`w-full h-[35.8%] text-white ${
              props.text || "text-2xl"
            } font-medium font-['Outfit'] leading-none pt-3`}
          >
            {props.name}
          </div>

          <div className="w-full h-[32.6%] text-[#d9d9d9] text-sm font-normal font-['Outfit'] leading-none mt-2">
            {props.property}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
