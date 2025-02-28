import React from "react";
import ".././output.css";
import profilePic from ".././Assets/Images/profile.jpg";

function Profile_Pic() {
  return (
    <div className="w-[18vw] h-[39.5vh]  rounded-3xl flex justify-center items-center overflow-hidden">
      <img
        src={profilePic}
        alt="Profile Pic"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
  );
}

export default Profile_Pic;
