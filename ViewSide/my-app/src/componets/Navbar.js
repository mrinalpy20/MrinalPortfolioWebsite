// Navbar.js
import React, { useState } from "react";
import ".././output.css";
import { Home, FolderInput, Wrench, Briefcase, Star, Mail } from "lucide-react";

function Navbar({ setCurrentPage }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const icons = [
    { icon: <Home />, page: "Aboutme" },
    { icon: <FolderInput />, page: "Work" },
    { icon: <Wrench />, page: "Tools" },
    { icon: <Briefcase />, page: "Testimonial" },
    { icon: <Star />, page: "Talk" },
  ];

  return (
    <div className="w-[55px] h-[350px] mt-[70px] ml-[100px] flex flex-col items-center justify-evenly bg-[#272829] rounded-xl">
      {icons.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
            setCurrentPage(item.page);
          }}
          className={`w-9 h-9 flex items-center justify-center transition-colors rounded-md ${
            activeIndex === index ? "bg-purple-500" : "bg-transparent"
          } hover:bg-purple-500`}
        >
          <div className="w-6 h-6 text-white">{item.icon}</div>
        </button>
      ))}
    </div>
  );
}

export default Navbar;
