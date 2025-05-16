import React from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import DescText from "../componets/description_text";
import ProjectBox from "../componets/projectbox";
import Natous from "../Assets/Images/Natours.jpg";
import Heartify from "../Assets/Images/Heartify.jpg";
import Retire from "../Assets/Images/Retire.jpg";
import SSO from "../Assets/Images/SSO.jpg";
import Dashboard from "../Assets/Images/Dashboard.png";
import PubMed from "../Assets/Images/pubmedcli.png";
function Work(props) {
  return (
    <div className="  w-[705px] h-[450px] ml-[40px] mt-[50px] flex flex-col">
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
      <div className="h-[5%]"></div>

      <div className="h-[60%] flex flex-rows mt-5">
        <ProjectBox
          image={Natous}
          url="https://github.com/mrinalpy20/Natours_Backend"
          text="MEPN stack travel booking website"
          heading="Natours"
        />
        <div className="w-[5%]"></div>
        <ProjectBox
          image={Retire}
          url="https://github.com/kiyoshi-87/RetireMate"
          text="Retirement Planning App"
          heading="Retiremate"
        />
      </div>
      {/* <div className="h-1"></div> */}
      <div className="h-[60%] flex flex-rows mt-[3%]">
        <ProjectBox
          image={Heartify}
          url="https://github.com/mrinalpy20/Heartify-"
          text="ML Based Heart Health App"
          heading="Heartify"
        />
        <div className="w-[5%]"></div>
        <ProjectBox
          image={SSO}
          url="https://github.com/mrinalpy20/SSO"
          text="Custom SSO server for Authentication"
          heading="OneKey"
        />
      </div>
      <div className="h-[60%] flex flex-rows mt-[3%]">
        <ProjectBox
          image={Dashboard}
          url="https://github.com/mrinalpy20/Dashboard"
          text="Inactive Student React JS Dashboard"
          heading="Elearn-Dash"
        />
        <div className="w-[5%]"></div>
        <ProjectBox
          image={PubMed}
          url="https://github.com/mrinalpy20/Pubmed_API_Projects"
          text="PubMed CLI tool to scrape medical data"
          heading="PubMed CLI"
        />
      </div>
    </div>
  );
}

export default Work;
