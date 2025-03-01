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
    <div className="w-[805px] h-[770px] ml-[96px] mt-[65px] grid grid-rows-[3fr_1fr_3fr_1fr_3fr]">
      <div>
        <HeaderText
          w="696px"
          h="57px"
          textsize="95px"
          position="left"
          line1="SOFTWARE"
          line2="ENGINEER"
          lastColor="#914bf1"
          marginTop="20px"
          lineheight="h-[25px]"
        />
      </div>
      <div className="h-5"></div>
      <div>
        <DescText
          text="Passionate about creating intuitive and engaging user applications. Specialize in transforming ideas into beautifully crafted products."
          w="768px"
          textAlign="left"
          textSize="text-2xl"
        />
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr]">
        <div>
          <HeaderText
            w="268px"
            h="57px"
            textsize="95px"
            position="left"
            line1="+3"
            lastColor="#00000"
            marginTop="20px"
          />
          <div className="h-3"></div>
          <DescText text="MONTHS OF EXPERIENCE" w="192px" textAlign="left" />
        </div>
        <div>
          <HeaderText
            w="268px"
            h="57px"
            textsize="95px"
            position="left"
            line1="+6"
            lastColor="#00000"
            marginTop="20px"
          />
          <div className="h-3"></div>
          <DescText text="PROJECTS COMPLETED" w="192px" textAlign="left" />
        </div>
        <div>
          <div class="w-[133px] h-[74px] text-white text-4xl font-semibold font-['Outfit'] leading-none mt-2">
            B.Tech ECE
          </div>
          <div className="h-3"></div>
          <DescText text="NIT SILCHAR 2024" w="134px" textAlign="left" />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-[1fr_1fr_1fr_1fr]">
        <div>
          <Button text="Let's Talk" width="w-[230px]" color="bg-[#914BF1]" />
        </div>
        <div>
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-[130px] h-11 bg-black rounded-lg flex items-center justify-center gap-2 overflow-hidden px-3 group transition-colors duration-300">
              <span className="text-white text-base font-medium font-['Outfit'] leading-tight mt-2 text-lg">
                My Work
              </span>
              <i className="fa-solid fa-arrow-right text-white text-lg mt-2.5 group-hover:text-[#914BF1] transition-colors duration-300"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="pt-[100px]">
        <DescText
          text="Worked with companies near, far, and worldwide"
          w="537px"
          textAlign="left"
        />
        <div className="mt-3 grid grid-cols-2 gap-x-6">
          <div className="flex items-center space-x-4">
            <LogoSvg w="92px" h="45px" logo={Logo} />
            <div className="mt-[4px]">
              <DescText
                text="Tata Consultancy Services"
                w="230px"
                textAlign="left"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LogoSvg w="92px" h="45px" logo={M} />
            <div className="mt-[4px]">
              <DescText text="Mitsogo Inc." w="134px" textAlign="left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

// grid grid-cols-[1fr_1fr_1fr] imp syntax
