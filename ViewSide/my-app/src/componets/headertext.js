import React from "react";
import ".././output.css";

const fontWeightMap = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

function HeaderText(props) {
  return (
    <>
      <div
        style={{
          width: props.w,
          height: props.h,
          fontSize: props.textsize,
          marginTop: props.marginTop,
        }}
        className={`text-${props.position} text-white ${
          fontWeightMap[props.fontWeight] || "font-bold"
        } font-['Outfit'] leading-10`}
      >
        {props.line1}
      </div>
      <div className={`${props.lineheight}`}></div>
      {props.line2 && (
        <div
          style={{
            width: props.w,
            height: props.h,
            fontSize: props.textsize,
          }}
          className={`text-${props.position} text-white ${
            fontWeightMap[props.fontWeight] || "font-bold"
          } font-['Outfit'] leading-10 mt-3`}
        >
          {props.line2.split(" ").slice(0, -1).join(" ")}{" "}
          <span style={{ color: props.lastColor }}>
            {props.line2.split(" ").slice(-1)}
          </span>
        </div>
      )}
    </>
  );
}

export default HeaderText;
