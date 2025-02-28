import React from "react";
import ".././output.css";
import HeaderText from "../componets/headertext";
import DescText from "../componets/description_text";
import Button from "../componets/button";
import LogoSvg from "../componets/logo";
import Logo from "../Assets/Logos/vector.png";
import M from "../Assets/Logos/union.png";
function Aboutme(props) {
  return (
    <div className=" w-[42vw] h-[86vh] ml-[5vw] mt-[8.5vh]  grid grid-rows-[3fr_1fr_3fr_1fr_4fr] ">
      <div className="">
        <HeaderText
          w="36.32vw"
          h="7.5vh"
          textsize="5.3vw"
          position="left"
          line1="SOFTWARE"
          line2="ENGINEER"
          lastColor="#914bf1"
          marginTop="20px"
        />
      </div>
      <div className="">
        <DescText
          text="Passionate about creating intuitive and engaging user application.
Specialize in transforming ideas into beautifully crafted products."
          w="40vw"
          textAlign="left"
        />
      </div>
      <div className=" grid grid-cols-[1fr_1fr_1fr]">
        <div className="">
          <HeaderText
            w="14vw"
            h="7.5vh"
            textsize="5.3vw"
            position="left"
            line1="+3"
            lastColor="#00000"
            marginTop="20px"
          />
          <DescText text="MONTHS OF EXPERIENCE" w="10vw" textAlign="left" />
        </div>
        <div className="">
          <HeaderText
            w="14vw"
            h="7.5vh"
            textsize="5.3vw"
            position="left"
            line1="+6"
            lastColor="#00000"
            marginTop="20px"
          />
          <DescText text="PROJECTS COMPLETED" w="10vw" textAlign="left" />
        </div>
        <div className="">
          <div class="w-[133px] h-[74px] text-white text-4xl font-semibold font-['Outfit'] leading-none mt-2">
            B.Tech ECE
          </div>
          <DescText text="NIT SILCHAR 2024" w="7vw" textAlign="left" />
        </div>
      </div>
      <div className=" grid grid-cols-[1fr_1fr_1fr_1fr]">
        <div className="">
          <Button text="Let's Talk" width="w-[12vw]" color="bg-[#914BF1]" />
        </div>
        <div>
          <div>
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[110px] h-11 bg-black rounded-lg flex items-center justify-center gap-2 overflow-hidden px-3 group transition-colors duration-300">
                <span className="text-white text-base font-normal font-['Outfit'] leading-tight mt-2">
                  My Work
                </span>
                <i className="fa-solid fa-arrow-right text-white text-sm mt-2.5 group-hover:text-[#914BF1] transition-colors duration-300"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <DescText
          text="Worked with companies near, far, and worldwide"
          w="28vw"
          textAlign="left"
        />

        <div className="mt-3 grid grid-cols-2 gap-x-6">
          <div className="flex items-center space-x-4">
            <LogoSvg w="4.8vw" h="6vh" logo={Logo} />
            <div className="mt-3">
              <DescText
                text="Tata Consultancy Services"
                w="12vw"
                textAlign="left"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LogoSvg w="4.8vw" h="6vh" logo={M} />
            <div className="mt-3.5">
              <DescText text="Mitsogo Inc." w="7vw" textAlign="left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

// grid grid-cols-[1fr_1fr_1fr] imp syntax
