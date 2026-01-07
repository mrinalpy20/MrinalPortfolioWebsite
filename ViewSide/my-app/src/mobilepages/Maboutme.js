import React, { useState } from "react";
import ".././output.css";
import HeaderText from "../componets/headertext";
import DescText from "../componets/description_text";
import Button from "../componets/button";
import LogoSvg from "../componets/logo";
import Logo from "../Assets/Logos/vector.png";
import M from "../Assets/Logos/union.png";
import MailBox from "../componets/mail";

function Aboutme(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="max-w-[370px] min-w-[320px] h-auto mx-auto px-4 mt-6 flex flex-col">
      {/* Title */}
      <HeaderText
        w="100%"
        h="auto"
        textsize="3.5rem"
        position="left"
        line1="SOFTWARE"
        line2="ENGINEER"
        lastColor="#914bf1"
        marginTop="20px"
        lineheight="h-auto"
      />

      {/* Description */}
      <div className="mt-6">
        <DescText
          text="Passionate about creating intuitive and engaging user applications. Specialize in transforming ideas into beautifully crafted products."
          w="100%"
          textAlign="left"
          textSize="text-xl"
          lh="leading-6"
        />
      </div>

      {/* Experience, Projects, Education - Now Stacked on Mobile */}
      <div className="flex flex-row mt-8 gap-6">
        <div>
          <HeaderText
            w="80%"
            h="auto"
            textsize="3rem"
            position="left"
            line1="+12"
            lastColor="#00000"
            marginTop="20px"
          />
          <DescText
            text="YEARS OF EXPERIENCE"
            w="80%"
            textAlign="left"
            textSize="text-md"
          />
        </div>
        <div>
          <HeaderText
            w="80%"
            h="auto"
            textsize="3rem"
            position="left"
            line1="+6"
            lastColor="#00000"
            marginTop="20px"
          />
          <DescText
            text="PROJECTS COMPLETED"
            w="80%"
            textAlign="left"
            textSize="text-md"
          />
        </div>
        <div className="mt-[7%]">
          <div className="text-white text-xl font-semibold leading-none mt-0 mb-0">
            B.Tech ECE
          </div>
          <DescText
            text="NIT SILCHAR 2024"
            w="80%"
            textAlign="left"
            textSize="text-md"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Button
          text="Let's Talk"
          width="w-full sm:w-[210px]"
          color="bg-[#914BF1]"
          onClick={openModal}
        />
        {isOpen && <MailBox closeModal={closeModal} />}

        <button
          onClick={() => {
            props.mywork("work");
          }}
        >
          <div className="w-[130px] h-11 opacity-100 rounded-lg flex items-center justify-center gap-2 overflow-hidden px-3 group transition-colors duration-300">
            <span className="text-white text-base font-medium font-['Outfit'] leading-tight mt-0 text-lg">
              My Work
            </span>
            <i className="fa-solid fa-arrow-right text-white text-lg mt-1 group-hover:text-[#914BF1] transition-colors duration-300"></i>
          </div>
        </button>
      </div>

      {/* Companies Worked With */}
      <div className="mt-12">
        <DescText
          text="Worked with companies near, far, and worldwide"
          w="100%"
          textAlign="left"
        />
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-6">
          <div className="flex items-center space-x-4">
            <LogoSvg w="72px" h="35px" logo={Logo} />
            <DescText
              text="Tata Consultancy Services"
              w="100%"
              textAlign="left"
              textSize="text-lg"
            />
          </div>
          <div className="flex flex-row items-center space-x-4">
            <LogoSvg w="72px" h="45px" logo={M} />
            <div className="w-[100%] mt-2">
              <DescText
                text="Mitsogo Inc."
                w="100%"
                textAlign="left"
                textSize="text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
