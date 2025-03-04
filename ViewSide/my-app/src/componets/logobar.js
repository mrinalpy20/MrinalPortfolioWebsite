import React from "react";
import ".././output.css";

function LogoBar(props) {
  return (
    <div className="w-[300px] h-[60px]  rounded-xl flex justify-evenly py-1.5 ">
      {/* Dribbble */}
      <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-dribbble text-xl text-white-500 hover:text-white-400"></i>
      </a>

      {/* GitHub */}
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github text-xl text-white hover:text-gray-400"></i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin text-xl text-white-600 hover:text-white-400"></i>
      </a>

      {/* Email */}
      <a href="mailto:your@email.com">
        <i className="fas fa-envelope text-xl text-white-300 hover:text-white-100"></i>
      </a>
    </div>
  );
}

export default LogoBar;
