// App.js
// App.js
import React, { useState } from "react";
import Aboutme from "./pages/Aboutme";
import Work from "./pages/Work";
import Tools from "./pages/tools";
import Testimonial from "./pages/testimonial";
import TalkCard from "./componets/letstalk";
import Navbar from "./componets/Navbar";
import Talk from "./pages/Talk";

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
      case "Talk":
        return <Talk />;
      default:
        return <Aboutme />;
    }
  };

  return (
    <div className="relative flex h-screen">
      <div className="flex-1 p-4">{renderPage()}</div>
      <div className="mt-[15%]">
        <Navbar setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default App;
