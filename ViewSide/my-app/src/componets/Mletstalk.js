import React, { useState } from "react";
import ".././output.css";
import SubHeaderText from "./subHeader";
import DescText from "../componets/description_text";

function TalkCard(props) {
  const [lastColor, setLastColor] = useState("#914bf1");
  let hoverTimeout; // Variable to store timeout ID

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setLastColor("#FFFFFF"); // Change to white after 500ms
    }, 150);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout); // Clear the timeout to avoid unwanted color change
    setTimeout(() => {
      setLastColor("#914bf1"); // Reset to original color after 500ms
    }, 150);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        props.w || "w-[705px]"
      } h-[280px] mt-[36px]  flex flex-col bg-[#2c2d2f] rounded-xl overflow-hidden transition-all duration-500 ease-in-out group hover:bg-[#914bf1]`}
    >
      <div className="h-[5%]"></div>
      <div className="h-[42%] flex flex-row">
        <div className="w-[5%] "></div>
        <div className="flex flex-col">
          <SubHeaderText
            position="left"
            textsize="3rem"
            line1="Lets"
            line2="collaborate"
            w="70%"
            h="auto"
            lastColor={lastColor}
            marginTop="2px"
            lineheight="h-[8%]"
            fontWeight="500"
          />
        </div>
        <div className="w-[12%] "></div>
        <div className="w-[15%] h-[60%] flex items-center justify-center mr-2">
          <button
            onClick={props.onNext}
            className="w-[50px] h-[50px] bg-[#8254e4] rounded-full transition-all duration-500 ease-in-out group-hover:bg-white flex items-center justify-center"
          >
            <i className="fa-solid fa-arrow-right text-white rotate-[315deg] transition-all duration-500 ease-in-out group-hover:text-[#914bf1]"></i>
          </button>
        </div>
      </div>
      <div className="h-[0%]"></div>
      <div className="ml-[3%] mr-[1%]">
        <DescText
          w="80%"
          text="Unlock the potential of your product with expert design and development services. Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users."
          textAlign="text-left"
          textSize="text-lg"
          lh="leading-med"
        />
      </div>
    </div>
  );
}

export default TalkCard;
