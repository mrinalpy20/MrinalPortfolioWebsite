import React from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import ToolCard from "../componets/toolcard";
import node from "../Assets/Logos/nodejs.png";
import pythons from "../Assets/Logos/python.png";
import figma from "../Assets/Logos/figma.png";
import powerbi from "../Assets/Logos/powerbi.png";
import reactlogo from "../Assets/Logos/reactlogo.png";
import mongodblogo from "../Assets/Logos/mongodb.png";

function Tools(props) {
  return (
    <div className=" w-[340px] h-[450px] ml-[4px] mt-[55px] flex flex-col">
      <SubHeaderText
        position="left"
        textsize="2.5rem" /* Adjusted for proportion */
        line1="Top-Tier Tools for"
        line2="Exceptional Results"
        w="100%" /* Made it relative */
        h="auto"
        lastColor="#914bf1"
        marginTop="2px"
        lineheight="h-[4px]"
        fontWeight="500"
      />

      <div className=" w-[100%] h-[22%] mt-7 flex flex-row justify-between">
        <div className="h-[70%] w-[48%]">
          <ToolCard
            logo={node}
            name="Node Js"
            property="Backend Env"
            text="text-lg"
          />
        </div>
        <div className="h-[70%] w-[48%]">
          <ToolCard
            logo={pythons}
            name="Python"
            property="Language"
            text="text-lg"
          />
        </div>
      </div>
      <div className=" w-[100%] h-[22%] mt-0 flex flex-row justify-between">
        <div className="h-[70%] w-[48%]">
          <ToolCard
            logo={reactlogo}
            name="React"
            property="Frontend Lib"
            text="text-lg"
          />
        </div>
        <div className="h-[70%] w-[48%]">
          <ToolCard
            logo={mongodblogo}
            name="MongoDB"
            property="Database"
            text="text-lg"
          />
        </div>
        {/* <div className="h-[90%] w-[30%]">
          <ToolCard logo={powerbi} name="PowerBI" property="Analytics Tool" />
        </div> */}
      </div>
      <div className=" w-[100%] h-[22%] mt-0 flex flex-row justify-between">
        <div className="h-[70%] w-[48%]">
          <ToolCard
            logo={figma}
            w="50%"
            h="60%"
            name="Figma"
            property="Design Tool"
            text="text-lg"
          />
        </div>
        <div className="h-[70%] w-[48%]">
          <ToolCard
            logo={powerbi}
            name="PowerBI"
            property="Analytics Tool"
            text="text-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Tools;
