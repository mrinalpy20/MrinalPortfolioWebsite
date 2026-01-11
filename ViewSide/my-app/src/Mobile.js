import React from "react";
import "./index.css";
import Intro from "./mobilepages/Mintro";
import Aboutme from "./mobilepages/Maboutme";
import Work from "./mobilepages/MWork";
import Tools from "./mobilepages/Mtools";
import Testimonial from "./mobilepages/Mtestimonial";
import Navbar from "./componets/MNavbar";
import Talk from "./mobilepages/Mtalk";
import Footer from "./mobilepages/Mfooter";
import Profile from "./mobilepages/Mpofile";

const Test = () => {
  // Function to handle smooth scrolling
  const handlePageChange = (page) => {
    document.getElementById(page)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col scale-100 items-center  w-[370px] h-[7100px]  overflow-y-auto">
        {/* Sticky Intro Component */}
        <div className="sticky z-50 top-0 h-[60px] mt-2">
          <Navbar setCurrentPage={handlePageChange} />
        </div>
        <div className="Intro h-[700px]  ">
          <Intro />
        </div>

        {/* Page Sections */}

        <div id="aboutme" className="h-[800px] ">
          <Aboutme mywork={handlePageChange} />
        </div>
        <div id="work" className="h-[2450px] ">
          <Work />
        </div>
        <div id="tools" className=" h-[500px] ">
          <Tools />
        </div>
        <div id="profile" className="h-[1300px] ">
          <Profile />
        </div>
        <div id="testimonial" className=" h-[500px] ">
          <Testimonial />
        </div>
        <div id="talk" className="h-[850px]  ">
          <Talk />
        </div>

        <div className="footer h-[100px] mt-10 ">
          <Footer />
        </div>
      </div>
    </>
  );
};

// Render to the DOM
export default Test;
