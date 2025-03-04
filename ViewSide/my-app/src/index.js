import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Intro from "./componets/intro";
import Aboutme from "./pages/Aboutme";
import Work from "./pages/Work";
import reportWebVitals from "./reportWebVitals";
import "./output.css";
import Profile from "./componets/pofile";
import Tools from "./pages/tools";
import Testimonial from "./pages/testimonial";
import Navbar from "./componets/Navbar";
// import TestCard from "./componets/testcard";
import TalkCard from "./componets/letstalk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <div className="flex flex-row">
      <Intro />
      <App />
    </div>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
