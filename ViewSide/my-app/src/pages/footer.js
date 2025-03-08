import React from "react";
import ".././output.css";

function Footer(props) {
  return (
    <div className="w-[100%] h-[100px]  flex flex-col">
      <div className="h-[15%]"></div>
      <div className="w-[100%] h-[12%] flex justify-center items-center">
        Download <span className="text-purple-500 ml-1"> Resumes</span>
      </div>
      <div className="h-[8%]"></div>
      <div className="w-[100%] h-[30%] flex flex-row justify-center items-center">
        <div className="w-[7%] h-[100%]  flex justify-center items-center">
          Software
        </div>
        <div className="w-1 h-[70%] bg-purple-500"></div>
        <div className="w-[7%] h-[100%]  flex justify-center items-center">
          Analytics
        </div>
        <div className="w-1 h-[70%] bg-purple-500"></div>
        <div className="w-[6%] h-[100%]  flex justify-center items-center">
          Design
        </div>
      </div>
    </div>
  );
}

export default Footer;
