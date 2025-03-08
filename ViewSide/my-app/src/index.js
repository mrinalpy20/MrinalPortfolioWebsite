// App.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Intro from "./componets/intro";
import Aboutme from "./pages/Aboutme";
import Work from "./pages/Work";
import Tools from "./pages/tools";
import Testimonial from "./pages/testimonial";
import Navbar from "./componets/Navbar";
import Talk from "./pages/Talk";
import Footer from "./pages/footer";
import Bgimage from "./Assets/Images/image.jpg";
import Profile from "./componets/pofile";

const App = () => {
  const [currentPage, setCurrentPage] = useState("aboutme");

  // Function to handle smooth scrolling
  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById(page)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${Bgimage})` }}
      ></div>

      {/* Main Content with Positive z-index */}
      <div className="relative z-10 flex flex-row">
        {/* Sticky Intro Component */}
        <div className="sticky top-0 h-[800px]">
          <Intro />
        </div>

        {/* Page Sections */}
        <div className="flex flex-col">
          <div id="aboutme" className="h-[750px] w-[900px]">
            <Aboutme mywork={handlePageChange} />
          </div>
          <div id="work" className="h-[750px] w-[900px]">
            <Work />
          </div>
          <div id="tools" className="h-[450px] w-[900px]">
            <Tools />
          </div>
          <div id="profile" className="h-[750px] w-[900px]">
            <Profile />
          </div>
          <div id="testimonial" className="h-[500px] w-[900px]">
            <Testimonial />
          </div>
          <div id="talk" className="h-[800px] w-[900px]">
            <Talk />
          </div>
        </div>

        {/* Navbar with Scrolling Handler */}
        <div className="sticky top-0 h-[800px]">
          <Navbar setCurrentPage={handlePageChange} />
        </div>
      </div>

      <Footer />
    </>
  );
};

// Render to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
