// App.js
import React, { useState } from "react";
import Aboutme from "./pages/Aboutme";
import Work from "./pages/Work";
import Tools from "./pages/tools";
import Testimonial from "./pages/testimonial";
import TalkCard from "./componets/letstalk";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Aboutme");

  const renderPage = () => {
    switch (currentPage) {
      case "Aboutme":
        return <Aboutme />;
      case "Work":
        return <Work />;
      case "Tools":
        return <Tools />;
      case "Testimonial":
        return <Testimonial />;
      case "TalkCard":
        return <TalkCard />;
      default:
        return <Aboutme />;
    }
  };

  return (
    <div className="relative flex h-screen">
      <div className="flex-1 p-4">{renderPage()}</div>

      <div className="fixed top-0 right-0 h-full flex flex-col space-y-2 p-4">
        {[
          { label: "About Me", page: "Aboutme" },
          { label: "Work", page: "Work" },
          { label: "Tools", page: "Tools" },
          { label: "Testimonial", page: "Testimonial" },
          { label: "TalkCard", page: "TalkCard" },
        ].map((item) => (
          <button
            key={item.page}
            onClick={() => setCurrentPage(item.page)}
            className={`w-2 h-10 bg-gray-400 hover:bg-blue-500 transition-colors ${
              currentPage === item.page ? "bg-blue-500" : ""
            }`}
          >
            <span className="sr-only">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
