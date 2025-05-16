import React, { useState } from "react";
import ".././output.css";
import ProfilePic from "../componets/profilepic";
import HeaderText from "../componets/headertext";
import DescText from "../componets/description_text";
import LogoBar from "../componets/logobar";
import Button from "../componets/button";
import MailBox from "../componets/mail";
function Intro() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <React.Fragment>
      <div className="w-[330px] h-[644px] ml-[0.6%] mt-[5%]  bg-[#303131] rounded-3xl flex flex-col">
        {/* Profile Picture */}
        <div className="h-[5%]"></div>
        <div className="flex justify-center items-center">
          <ProfilePic w="w-[75%]" h="w-[75%]" />
        </div>

        {/* Name */}
        <div className="h-[5%]"></div>
        <div className="flex justify-center items-center">
          <HeaderText
            position="center"
            textsize="2rem" /* Adjusted for proportion */
            line1="Mrinal Kalita"
            w="75%" /* Made it relative */
            h="auto"
            fontWight="bold"
          />
        </div>
        <div className="h-[2%]"></div>

        {/* Description */}
        <div className="flex flex-col items-center gap-2">
          <DescText
            text="Software Engineer & Data Analyst"
            textSize="text-md"
            width="80%" /* Adjusted to fit within new root width */
          />
          <DescText text="Guwahati, India" textSize="text-md" />
        </div>
        <div className="h-[2%]"></div>
        {/* Logo Bar */}
        <div className="flex justify-center items-center">
          <LogoBar className="w-[60%] h-auto" />
        </div>
        <div className="h-[8%]"></div>
        {/* Button */}
        <div className="flex justify-center items-center">
          <Button
            text="Let's Talk"
            onClick={openModal}
            width="w-[60%]" /* Adjusted */
            color="bg-[#914BF1]"
          />
        </div>
      </div>
      {isOpen && <MailBox closeModal={closeModal} />}
    </React.Fragment>
  );
}

export default Intro;

// 272829
// service_zoajuuc
