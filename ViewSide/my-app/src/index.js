// App.jsx or Index.jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Test from "./Mobile"; // Mobile view
import App from "./App"; // Desktop view

const Index = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(process.env.REACT_APP_SERVICE_KEY);

  return isMobile ? <Test /> : <App />;
};

// Render to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
