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
      <div className="w-[25vw] h-[87.4vh] ml-[12vw] mt-[8vh]  sticky bg-[#303131] rounded-3xl grid grid-rows-[11fr_2fr_2fr_2fr_4fr]">
        <div className="flex justify-center items-center">
          <Profile_Pic />
        </div>

        <div className=" flex justify-center items-center">
          <HeaderText
            position="center"
            textsize="36px"
            line1="Mrinal Kalita"
            w="14vw"
            h="6vh"
          />
        </div>
        <div className=" flex flex-col items-center gap-4">
          <DescText text="Software Engineer & Data Analyst" />

          <DescText text="Guwahati, India" />
        </div>
        <div className=" flex justify-center items-center">
          <LogoBar />
        </div>
        <div className=" flex justify-center items-center">
          <Button
            text="Let's Talk"
            onClick={() => alert("Button Clicked!")}
            width="w-[12vw]"
            mt="10"
            color="bg-[#914BF1]"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;
// 272829
