import React from "react";
import ".././output.css";

function Button(props) {
  return (
    <button
      className={`h-[6vh]  ${
        props.width || "w-[8vw]"
      } rounded-xl flex justify-center items-center ${props.color} mt-${
        props.mt
      } cursor-pointer`}
      onClick={props.onClick} // Calls the function passed via props
    >
      {props.text}
    </button>
  );
}

export default Button;
