import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function App() {
  const [alert, setalert] = useState(null);

  // Show alert when getting notification
  const showalert = (message, type) => {
    setalert({
      msg: message,
      tp: type,
    });
  };
  window.setTimeout(() => {
    setalert(null);
  }, 3000);

  return (
    <>
      <NoteState>
        <Router>
          <Navbar showalert={showalert} />
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<Home showalert={showalert} />} />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/login"
                element={<Login showalert={showalert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showalert={showalert} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}
export default App;
