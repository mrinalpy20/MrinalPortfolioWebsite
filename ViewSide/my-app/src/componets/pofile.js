import React from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import DescText from "../componets/description_text";
import ProjectBox from "../componets/projectbox";
import Dribbble from "../Assets/Images/Dribbble.jpg";
import Leetcode from "../Assets/Images/Leetcode.jpg";
import CodeStudio from "../Assets/Images/CodeStudio.jpg";
import Analytics from "../Assets/Images/Analytics.jpg";

function Profile(props) {
  return (
    <div className="  w-[705px] h-[690px] ml-[96px] mt-[65px] flex flex-col">
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
        <ProjectBox image={Dribbble} text=" " heading="UI/UX Designs" />
        <div className="w-5"></div>
        <ProjectBox image={Leetcode} text="  " heading="Leetcode" />
      </div>
      {/* <div className="h-1"></div> */}
      <div className="flex flex-rows">
        <ProjectBox image={CodeStudio} text=" " heading="Code Studio" />
        <div className="w-5"></div>
        <ProjectBox image={Analytics} text="   " heading="Analytics" />
      </div>
    </div>
  );
}

export default Profile;
