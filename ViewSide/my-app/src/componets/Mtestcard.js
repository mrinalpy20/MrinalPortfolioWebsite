import React from "react";
import ".././output.css";
// import profilePic from ".././Assets/Images/profile.jpg";
import DescText from "./description_text";

function TestCard(props) {
  return (
    <div className="w-[330px] h-[200px]  flex flex-col bg-[#2c2d2f] rounded-xl  overflow-hidden">
      <div className=" h-[7%]"></div>
      <div className="  h-[35%] flex flex-row">
        <div className="w-[3%]"></div>
        <div className="  w-[15%] flex items-center justify-center">
          <div className="w-[100%] h-[75%]  rounded-full overflow-hidden">
            <img
              src={props.profilePic}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-[4%]"></div>
        <div className="w-[40%] text-white text-xl font-medium font-['Outfit'] leading-7 flex items-center justify-left">
          {props.text}
        </div>
      </div>
      <div className="ml-[3%] mt-[4%] mr-[1%]">
        <DescText
          w="90%"
          text={props.content}
          textAlign="left"
          textSize="text-lg"
          lh="leading-snug"
        />
      </div>
    </div>
  );
}

export default TestCard;
