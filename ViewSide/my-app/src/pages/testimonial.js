import React from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import DescText from "../componets/description_text";
import TestCard from "../componets/testcard";
function Testimonial(props) {
  return (
    <div className="  w-[705px] h-[450px] ml-[40px] mt-[65px] flex flex-col">
      <SubHeaderText
        position="left"
        textsize="3.5rem" /* Adjusted for proportion */
        line1="What Colleagues Say"
        line2="About My Work"
        w="100%" /* Made it relative */
        h="auto"
        lastColor="#914bf1"
        marginTop="2px"
        lineheight="h-[8px]"
        fontWeight="500"
      />
      <div className=" h-[6%]"></div>
      <div className=" h-[10%] flex flex-row justify-end">
        <div className=" w-[7%] flex flex-row justify-evenly">
          <button
            onClick={props.onPrev}
            className="w-[87%] h-[100%] bg-[#9a54f1] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#914BF1] focus:outline-none"
          >
            <i className="fa-solid fa-arrow-left text-white"></i>
          </button>
        </div>
        <div className=" w-[7%] flex flex-row justify-evenly">
          <button
            onClick={props.onNext}
            className="w-[87%] h-[100%] bg-[#9a54f1] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#914BF1] focus:outline-none"
          >
            <i className="fa-solid fa-arrow-right text-white"></i>
          </button>
        </div>
      </div>
      <div className="h-[5%]"></div>
      <TestCard />
    </div>
  );
}

export default Testimonial;
