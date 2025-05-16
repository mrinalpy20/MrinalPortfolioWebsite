import React from "react";
import ".././output.css";
import Frame2 from ".././Assets/Images/Frame2.png";

function ProfilePic(props) {
  return (
    <div
      className={`${props.w} ${props.h}  rounded-3xl flex justify-center items-center overflow-hidden`}
    >
      <img
        src={Frame2}
        alt="Profile Pic"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
  );
}

export default ProfilePic;
