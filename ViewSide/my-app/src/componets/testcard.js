import React from "react";
import ".././output.css";
import profilePic from ".././Assets/Images/profile.jpg";
import DescText from "../componets/description_text";

function TestCard(props) {
  return (
    <div className="w-[705px] h-[240px]  flex flex-col bg-[#2c2d2f] rounded-xl  overflow-hidden">
      <div className=" h-[7%]"></div>
      <div className="  h-[35%] flex flex-row">
        <div className="w-[3%]"></div>
        <div className="  w-[10%] flex items-center justify-center">
          <div className="w-[95%] h-[85%]  rounded-full overflow-hidden">
            <img
              src={profilePic}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-[2%]"></div>
        <div class="w-[40%] text-white text-2xl font-medium font-['Outfit'] leading-7 flex items-center justify-left">
          {props.text}
        </div>
      </div>
      <div className="ml-[3%] mt-[4%]">
        <DescText
          w="90%"
          text={props.content}
          textAlign="left"
          textSize="text-xl"
          lh="leading-snug"
        />
      </div>
    </div>
  );
}

export default TestCard;
