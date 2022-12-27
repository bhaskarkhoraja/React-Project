import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const togglemode = (cls) => {
    clearTimeout(timer);
    if (cls.length > 1) {
      if (mode === "light") {
        setmode("dark");
        document.body.style.backgroundColor = `${cls}`;
        showalert(
          `${cls === "#232b44" ? "Dark" : cls} mode enabled`,
          "success"
        );
        document.title = "Text Utils - Dark Mode";
        // setInterval(() => {
        //   document.title = "Text Utils is amazing";
        // }, 2000);
        // setInterval(() => {
        //   document.title = "Download it now";
        // }, 1200);
      } else {
        setmode("light");
        document.body.style.backgroundColor = "white";
        showalert("Light mode enabled", "success");
        document.title = "Text Utils - Light Mode";
      }
    } else {
      showalert("Please Choose a color to toggle mode", "danger");
    }
  };

  const showalert = (message, type) => {
    setalert({
      msg: message,
      tp: type,
    });
  };
  const timer = window.setTimeout(() => {
    setalert(null);
  }, 3000);

  return (
    <>
      <Router>
        <Navbar
          title="Text-Converter"
          darkmode={mode}
          toggledarkmode={togglemode}
        />
        <div className="container my-4">
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Textform
                  darkmode={mode}
                  showalert={showalert}
                  title={"Enter your text below"}
                />
              }
            />
            <Route exact path="/about" element={<About darkmode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
