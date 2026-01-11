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
        <div className="w-[40%] h-[100%]  flex justify-center items-center ">
          <a href="https://mrinal-kalita-resume.tiiny.site/">Software</a>
        </div>
        <div className="w-1 h-[70%] bg-purple-500 mx-2"></div>
        <div className="w-[40%] h-[100%]  flex justify-center items-center">
          <a href="https://drive.google.com/file/d/1dhugY8pYYoFUrOrlnaPmx_Zw2BKpF0lp/view?usp=drive_link">
            Analytics
          </a>
        </div>
        <div className="w-1 h-[70%] bg-purple-500 mx-2"></div>
        <div className="w-[40%] h-[100%]  flex justify-center items-center">
          <a href="https://www.behance.net/mrinalkalita1">Design</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
