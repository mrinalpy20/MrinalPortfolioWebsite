import React from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import ProjectBox from "../componets/projectbox";
import Behance from "../Assets/Images/Behance.png";
import Leetcode from "../Assets/Images/Leetcode.jpg";
import CodeStudio from "../Assets/Images/CodeStudio.jpg";
import Analytics from "../Assets/Images/Analytics.jpg";

function Profile(props) {
  return (
    <div className="  w-[705px] h-[450px] ml-[40px] mt-[50px] flex flex-col">
      <SubHeaderText
        position="left"
        textsize="3.5rem" /* Adjusted for proportion */
        line1="Design and Coding"
        line2="Portfolios"
        w="100%" /* Made it relative */
        h="auto"
        lastColor="#914bf1"
        marginTop="2px"
        lineheight="h-[8px]"
        fontWeight="500"
      />
      <div className="h-10"></div>

      <div className="flex flex-rows mt-5">
        <ProjectBox
          image={Behance}
          text=" "
          heading="UI/UX Designs"
          url="https://www.behance.net/mrinalkalita1"
        />
        <div className="w-[5%]"></div>
        <ProjectBox
          image={Leetcode}
          text="  "
          heading="Leetcode"
          url="https://leetcode.com/u/mrinal_98/"
        />
      </div>
      {/* <div className="h-1"></div> */}
      <div className="flex flex-rows mt-[3%]">
        <ProjectBox
          image={CodeStudio}
          text=" "
          heading="Code Studio"
          url="https://www.naukri.com/code360/profile/Mrinalpy20"
        />
        <div className="w-[5%]"></div>
        <ProjectBox
          image={Analytics}
          text="   "
          heading="Analytics"
          url="https://github.com/mrinalpy20/Analytics"
        />
      </div>
    </div>
  );
}

export default Profile;
