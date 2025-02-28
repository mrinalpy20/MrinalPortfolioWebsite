import React, { useState } from "react";
import ".././output.css";

function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: "fa-home", link: "#" },
    { id: "projects", icon: "fa-folder", link: "#" },
    { id: "tools", icon: "fa-wrench", link: "#" },
    { id: "work", icon: "fa-briefcase", link: "#" },
    { id: "blog", icon: "fa-edit", link: "#" },
    { id: "contact", icon: "fa-envelope", link: "#" },
  ];

  return (
    <div className="bg-[#272829] w-fit mx-auto p-2 rounded-xl flex gap-6">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className={`w-12 h-12 flex items-center justify-center rounded-lg ${
            active === item.id ? "bg-[#914bf1] text-white" : "text-white"
          }`}
          onClick={() => setActive(item.id)}
        >
          <i className={`fas ${item.icon} text-xl`}></i>
        </a>
      ))}
    </div>
  );
}

export default Navbar;
