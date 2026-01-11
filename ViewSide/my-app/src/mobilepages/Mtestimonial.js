import React, { useRef, useState } from "react";
import ".././output.css";
import SubHeaderText from "../componets/subHeader";
import TestCard from "../componets/Mtestcard";

function Testimonial(props) {
  const cards = [
    {
      text: "Mainur Islam Ahmed",
      content:
        "Working with Mrinal has been a pleasure. His dedication and attention to detail are impressive.",
    },
    {
      text: "Suman Goswami",
      content:
        "Mrinal consistently delivers high-quality work, even under tight deadlines. A true professional!",
    },
    {
      text: "Manish",
      content:
        "Mrinal's problem-solving skills are exceptional. He always finds effective solutions to complex challenges.",
    },
    {
      text: "Niraj Patil",
      content:
        "A reliable team member, Mrinal brings creativity and innovation to every project.",
    },
    {
      text: "Mahadeva B R",
      content:
        "I appreciate Mrinal's collaborative spirit and his ability to inspire those around him.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous card
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next card
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-[340px] h-[450px] ml-[10px] mt-[65px] flex flex-col">
      <SubHeaderText
        position="left"
        textsize="2.5rem"
        line1="My Colleagues"
        line2=" About My Work"
        w="100%"
        h="auto"
        lastColor="#914bf1"
        marginTop="2px"
        lineheight="h-[1px]"
        fontWeight="500"
      />
      <div className=" h-[6%]"></div>
      <div className=" h-[10%] flex flex-row justify-end">
        <div className=" w-[7%] flex flex-row justify-evenly">
          <button
            onClick={prevSlide}
            className="w-[90%] h-[45%] bg-[#9a54f1] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#914BF1] focus:outline-none"
          >
            <i className="fa-solid fa-arrow-left text-white text-sm"></i>
          </button>
        </div>
        <div className=" w-[7%] flex flex-row justify-evenly">
          <button
            onClick={nextSlide}
            className="w-[90%] h-[45%] bg-[#9a54f1] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#914BF1] focus:outline-none"
          >
            <i className="fa-solid fa-arrow-right text-white text-sm"></i>
          </button>
        </div>
      </div>
      <div className="h-[5%]"></div>
      <div className="w-[100%] overflow-hidden flex flex-row">
        <div
          className="flex flex-row transition-transform duration-1000 ease-in-out z-[-1]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-full flex-shrink-0  ">
              <TestCard text={card.text} content={card.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
