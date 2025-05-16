import React from "react";
import ".././output.css";
import TalkCard from "../componets/Mletstalk";
import SubHeaderText from "../componets/subHeader";
import QuestionCard from "../componets/Question";

function Talk(props) {
  return (
    <div className="max-w-[370px] min-w-[320px] h-auto mx-auto px-4 mt-8 flex flex-col">
      {/* Header */}
      <SubHeaderText
        position="left"
        textsize="2.5rem"
        line1="Frequently Asked "
        line2="Questions"
        w="100%"
        h="auto"
        lastColor="#914bf1"
        marginTop="2px"
        lineheight="h-auto"
        fontWeight="500"
      />

      <div className="h-6" />

      {/* Questions */}
      <div className="flex flex-col gap-4">
        <QuestionCard
          text="What services do you offer?"
          ans="Primarily Full-Stack web development from design to deployment, also automation of data analytics and dashboards."
          h="h-auto"
          w="w-[340px]"
          ht="h-[55px]"
        />
        <QuestionCard
          text="Are you open to freelance work or full-time opportunities?"
          ans="Yes, I am open to both freelancing and full-time opportunities, remote and onsite."
          h="h-auto"
          w="w-[340px]"
          ht="h-[75px]"
        />
        <QuestionCard
          text="What is your approach to problem-solving and debugging?"
          ans="I approach problem-solving and debugging methodically: break down the issue, analyze the code, use debugging tools, test iteratively, and learn from each challenge to improve continuously."
          h="h-auto"
          w="w-[340px]"
          ht="h-[75px]"
        />
      </div>

      {/* Contact Card */}
      <div className="mt-8">
        <TalkCard w="w-[340px]" />
      </div>
    </div>
  );
}

export default Talk;
