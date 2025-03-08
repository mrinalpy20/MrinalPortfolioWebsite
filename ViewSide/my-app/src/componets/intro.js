import React from "react";
import ".././output.css";
import ProfilePic from "./profilepic";
import HeaderText from "./headertext";
import DescText from "./description_text";
import LogoBar from "./logobar";
import Button from "./button";

function Intro() {
  return (
    <React.Fragment>
      <div className="w-[320px] h-[644px] ml-[120px] mt-[55px] sticky bg-[#303131] rounded-3xl flex flex-col">
        {/* Profile Picture */}
        <div className="h-[5%]"></div>
        <div className="flex justify-center items-center">
          <ProfilePic w="w-[75%]" h="w-[75%]" />
        </div>

        {/* Name */}
        <div className="h-[5%]"></div>
        <div className="flex justify-center items-center">
          <HeaderText
            position="center"
            textsize="2rem" /* Adjusted for proportion */
            line1="Mrinal Kalita"
            w="75%" /* Made it relative */
            h="auto"
            fontWight="bold"
          />
        </div>
        <div className="h-[2%]"></div>

        {/* Description */}
        <div className="flex flex-col items-center gap-2">
          <DescText
            text="Software Engineer & Data Analyst"
            textSize="text-md"
            width="80%" /* Adjusted to fit within new root width */
          />
          <DescText text="Guwahati, India" textSize="text-md" />
        </div>
        <div className="h-[2%]"></div>
        {/* Logo Bar */}
        <div className="flex justify-center items-center">
          <LogoBar className="w-[60%] h-auto" />
        </div>
        <div className="h-[8%]"></div>
        {/* Button */}
        <div className="flex justify-center items-center">
          <Button
            text="Let's Talk"
            onClick={() => alert("Button Clicked!")}
            width="w-[60%]" /* Adjusted */
            color="bg-[#914BF1]"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;

// 272829
