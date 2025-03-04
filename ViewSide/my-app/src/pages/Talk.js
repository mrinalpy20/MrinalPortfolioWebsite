import React, { useState } from "react";
import ".././output.css";
import TalkCard from "../componets/letstalk";
import SubHeaderText from "../componets/subHeader";
import QuestionCard from "../componets/Question";
function Talk(props) {
  return (
    <div className="w-[705px] h-[690px] mt-[60px] ml-[40px] flex flex-col">
      <SubHeaderText
        position="left"
        textsize="3.5rem" /* Adjusted for proportion */
        line1="Frequently Asked "
        line2="Questions"
        w="100%" /* Made it relative */
        h="auto"
        lastColor="#914bf1"
        marginTop="2px"
        lineheight="h-[8px]"
        fontWeight="500"
      />
      <div className="h-8" />
      <QuestionCard text="What services do you offer?" />
      <QuestionCard text="Are you open to freelance work or full-time opportunities?" />
      <QuestionCard text="What is your approach to problem-solving and debugging?" />
      <TalkCard />
    </div>
  );
}

export default Talk;
