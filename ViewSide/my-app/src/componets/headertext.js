import React from "react";
import ".././output.css";

function HeaderText(props) {
  return (
    <React.Fragment>
      <div
        style={{
          width: props.w,
          height: props.h,
          fontSize: props.textsize,
          marginTop: props.marginTop,
        }}
        className={`text-${props.position} text-white font-bold font-['Outfit'] leading-10`}
      >
        {props.line1}
      </div>
      {props.line2 && (
        <div
          style={{
            width: props.w,
            height: props.h,
            fontSize: props.textsize,
          }}
          className={`text-${props.position} text-white font-bold font-['Outfit'] leading-10 mt-3`}
        >
          {props.line2.split(" ").slice(0, -1).join(" ")}{" "}
          <span style={{ color: props.lastColor }}>
            {props.line2.split(" ").slice(-1)}
          </span>
        </div>
      )}
    </React.Fragment>
  );
}

export default HeaderText;
