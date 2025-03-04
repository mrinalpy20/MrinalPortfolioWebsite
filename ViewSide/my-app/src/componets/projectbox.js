import React from "react";
import ".././output.css";
import DescText from "./description_text";

function ProjectBox(props) {
  return (
    <div className="w-[75%] h-[100%] relative bg-[#2c2d2f] rounded-[20px] overflow-hidden group">
      {/* Image Container with Zoom Effect */}
      <div className="h-[69%] w-[100%] overflow-hidden">
        <img
          className="h-[90%] w-[100%] transition-transform duration-500 ease-out group-hover:scale-105"
          src={props.image}
          alt="project"
        />
      </div>

      <div className="h-[29%] flex flex-col">
        {/* Heading with Hover Color Change */}
        <div className="w-[100%] h-[30%] text-white text-[1.45rem] font-medium font-['Outfit'] leading-10 ml-3 transition-colors duration-500 ease-out group-hover:text-[#914bf1]">
          {props.heading}
        </div>

        <div className="ml-3 mt-5">
          <DescText
            w="100%"
            text={props.text}
            textAlign="left"
            textSize="base"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
