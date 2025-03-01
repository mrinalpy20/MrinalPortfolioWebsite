import React from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import DescText from "../componets/description_text";
import ProjectBox from "../componets/projectbox";
import Natous from "../Assets/Images/Natours.jpg";
import Heartify from "../Assets/Images/Heartify.jpg";
import Retire from "../Assets/Images/Retire.jpg";

function Work(props) {
  return (
    <div className="  w-[705px] h-[690px] ml-[96px] mt-[65px] flex flex-col">
      <SubHeaderText
        position="left"
        textsize="3.5rem" /* Adjusted for proportion */
        line1="Recent Projects"
        line2="and Achievements"
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
          image={Natous}
          text="MEPN stack travel booking website"
          heading="Natours"
        />
        <div className="w-5"></div>
        <ProjectBox
          image={Retire}
          text="Retirement Planning App"
          heading="Retiremate"
        />
      </div>
      {/* <div className="h-1"></div> */}
      <div className="flex flex-rows">
        <ProjectBox
          image={Heartify}
          text="ML Based Heart Health App"
          heading="Heartify"
        />
        <div className="w-5"></div>
        <ProjectBox
          image={Heartify}
          text="MEPN stack travel booking website"
          heading="Natours"
        />
      </div>
    </div>
  );
}

export default Work;
