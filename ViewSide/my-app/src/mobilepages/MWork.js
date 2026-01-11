import React from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import ProjectBox from "../componets/projectbox";
import Natous from "../Assets/Images/Natours.jpg";
import Heartify from "../Assets/Images/Heartify.jpg";
import Retire from "../Assets/Images/Retire.jpg";
import SSO from "../Assets/Images/SSO.jpg";
import Dashboard from "../Assets/Images/Dashboard.png";
import PubMed from "../Assets/Images/pubmedcli.png";

function Work(props) {
  return (
    <div className="  w-[340px] h-[1000px] ml-[4px] mt-[50px] flex flex-col">
      <SubHeaderText
        position="left"
        textsize="2.5rem" /* Adjusted for proportion */
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

      <div className="ml-3">
        <div className="h-[40%] flex flex-col mt-5">
          <ProjectBox
            url="https://github.com/mrinalpy20/Natours_Backend"
            image={Natous}
            text="MEPN stack travel booking website"
            heading="Natours"
            w="w-[95%]"
          />
          <div className="h-[5%]"></div>
          <ProjectBox
            url="https://github.com/kiyoshi-87/RetireMate"
            image={Retire}
            text="Retirement Planning App"
            heading="Retiremate"
            w="w-[95%]"
          />
        </div>
        {/* <div className="h-1"></div> */}
        <div className="h-[40%] flex flex-col mt-[5%]">
          <ProjectBox
            url="https://github.com/mrinalpy20/Heartify-"
            image={Heartify}
            text="ML Based Heart Health App"
            heading="Heartify"
            w="w-[95%]"
          />
          <div className="h-[5%]"></div>
          <ProjectBox
            url="https://github.com/mrinalpy20/SSO"
            image={SSO}
            text="Custom SSO server for Authentication"
            heading="OneKey"
            w="w-[95%]"
          />
        </div>
        <div className="h-[40%] flex flex-col mt-[5%]">
          <ProjectBox
            image={Dashboard}
            url="https://github.com/mrinalpy20/Dashboard"
            text="Inactive Student React JS Dashboard"
            heading="Elearn-Dash"
            w="w-[95%]"
          />
          <div className="h-[5%]"></div>
          <ProjectBox
            image={PubMed}
            url="https://github.com/mrinalpy20/Pubmed_API_Projects"
            text="PubMed CLI tool to scrape medical data"
            heading="PubMed CLI"
            w="w-[95%]"
          />
        </div>{" "}
      </div>
    </div>
  );
}

export default Work;
