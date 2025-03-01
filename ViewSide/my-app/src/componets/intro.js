import React from "react";
import ".././output.css";
import Profile_Pic from "./profilepic";
import HeaderText from "./headertext";
import DescText from "./description_text";
import LogoBar from "./logobar";
import Button from "./button";

function Intro() {
  return (
    <React.Fragment>
      <div className="w-[350px] h-[684px] ml-[150px] mt-[61px] sticky bg-[#303131] rounded-3xl grid grid-rows-[11fr_2fr_2fr_2fr_4fr]">
        {/* Profile Picture */}
        <div className="flex justify-center items-center">
          <Profile_Pic className="w-[30%] h-[30%]" />
        </div>

        {/* Name */}
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

        {/* Description */}
        <div className="flex flex-col items-center gap-2">
          <DescText
            text="Software Engineer & Data Analyst"
            textSize="text-lg"
            width="80%" /* Adjusted to fit within new root width */
          />
          <DescText text="Guwahati, India" textSize="text-md" />
        </div>

        {/* Logo Bar */}
        <div className="flex justify-center items-center">
          <LogoBar className="w-[60%] h-auto" />
        </div>

        {/* Button */}
        <div className="flex justify-center items-center">
          <Button
            text="Let's Talk"
            onClick={() => alert("Button Clicked!")}
            width="w-[50%]" /* Adjusted */
            color="bg-[#914BF1]"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;

// 272829
