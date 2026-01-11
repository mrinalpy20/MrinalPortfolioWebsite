import React from "react";
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
      <QuestionCard
        text="What services do you offer?"
        ans="Primarily Full-Stack web developement from design to deployment also automation of data analytics and dashboards."
        h="h-[140px]"
        ht="h-[65px]"
      />
      <QuestionCard
        text="Are you open to freelance work or full-time opportunities?"
        ans="Yes I am open to both freelancing and full-time opportunities remote and onsite."
        h="h-[110px]"
        ht="h-[65px]"
      />
      <QuestionCard
        text="What is your approach to problem-solving and debugging?"
        ans="I approach problem-solving and debugging methodically: break down the issue, analyze the code, use debugging tools, test iteratively, and learn from each challenge to improve continuously."
        h="h-[170px] "
        ht="h-[65px]"
      />
      <div className="flex-shrink-0 h-[200px]">
        <TalkCard />
      </div>
    </div>
  );
}

export default Talk;
