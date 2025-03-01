import React from "react";
import ".././output.css";

function SubHeaderText(props) {
  return (
    <>
      <div
        style={{
          width: props.w,
          height: props.h,
          fontSize: props.textsize,
          marginTop: props.marginTop,
          fontWeight: props.fontWeight,
        }}
        className={`text-${props.position} text-white  font-['Outfit'] leading-10`}
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
            fontWeight: props.fontWeight,
          }}
          className={`text-${props.position} text-white  font-['Outfit'] leading-10 mt-3`}
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

export default SubHeaderText;
