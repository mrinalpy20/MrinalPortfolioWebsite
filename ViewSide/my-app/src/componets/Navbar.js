import React, { useState, useRef } from "react";
import ".././output.css";
import { Home, FolderInput, Wrench, Briefcase, Star, Mail } from "lucide-react";

function Navbar({ setCurrentPage }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const icons = [
    { icon: <Home />, page: "aboutme" },
    { icon: <FolderInput />, page: "work" },
    { icon: <Wrench />, page: "tools" },
    { icon: <Briefcase />, page: "profile" },
    { icon: <Star />, page: "testimonial" },
    { icon: <Mail />, page: "talk" },
  ];

  return (
    <div className="w-[55px] h-[350px] mt-[170px]  flex flex-col items-center justify-evenly bg-[#272829aa] rounded-xl opacity-90">
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
