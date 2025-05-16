import React from "react";
import ".././output.css";

function Button(props) {
  return (
    <button
      type={props.type}
      className={`text-lg font-medium h-[50px]  ${
        props.width || "w-[154px]"
      } rounded-lg flex justify-center items-center ${props.color} mt-${
        props.mt
      } cursor-pointer`}
      onClick={props.onClick} // Calls the function passed via props
    >
      {props.text}
    </button>
  );
}

export default Button;
