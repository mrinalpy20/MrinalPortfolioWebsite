import React from "react";
import ".././output.css";
import Logo from "../Assets/Logos/vector.png";

function LogoSvg(props) {
  return (
    <div
      className={`w-[${props.w}] h-[${props.h}] ml-2 mt-3 flex justify-left overflow-hidden`}
    >
      <img
        src={props.logo}
        alt="Logo"
        className={`w-[${props.w}] h-[${props.h}]`}
      />
    </div>
  );
}

export default LogoSvg;
