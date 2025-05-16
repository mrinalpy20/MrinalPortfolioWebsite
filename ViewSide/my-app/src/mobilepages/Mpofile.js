import React from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import DescText from "../componets/description_text";
import ProjectBox from "../componets/projectbox";
import Behance from "../Assets/Images/Behance.png";
import Leetcode from "../Assets/Images/Leetcode.jpg";
import CodeStudio from "../Assets/Images/CodeStudio.jpg";
import Analytics from "../Assets/Images/Analytics.jpg";

function Profile(props) {
  return (
    <div className="  w-[350px] h-[1000px] ml-[4px] mt-[50px] flex flex-col">
      <SubHeaderText
        position="left"
        textsize="2.5rem" /* Adjusted for proportion */
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
      <div className="ml-3">
        <div className="flex flex-col mt-5">
          <ProjectBox
            image={Behance}
            text=" "
            heading="UI/UX Designs"
            w="w-[95%]"
            url="https://www.behance.net/mrinalkalita1"
          />
          <div className="h-3"></div>
          <ProjectBox
            image={Leetcode}
            text="  "
            heading="Leetcode"
            w="w-[95%]"
            url="https://leetcode.com/u/mrinal_98/"
          />
        </div>

        <div className="flex flex-col mt-[5%]">
          <ProjectBox
            image={CodeStudio}
            text=" "
            heading="Code Studio"
            w="w-[95%]"
            url="https://www.naukri.com/code360/profile/Mrinalpy20"
          />
          <div className="h-3"></div>
          <ProjectBox
            image={Analytics}
            text="   "
            heading="Analytics"
            w="w-[95%]"
            url="https://github.com/mrinalpy20/Analytics"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
