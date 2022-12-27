import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  // Use Navlink instead of Link while you are not using bootstrap with activeclassName={classname}
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [color, setcolor] = useState("");
  const [active, setactive] = useState({
    activeObject: null,
    object: ["red", "orange", "blue", "#232b44"],
  });

  const toggleActive = (index) => {
    setactive({ ...active, activeObject: active.object[index] });
  };

  const toggleActiveStyle = (index) => {
    if (active.object[index] === active.activeObject) {
      return "mx-1 round actives";
    } else {
      return "mx-1 round inactive";
    }
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.darkmode} bg-${props.darkmode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    splitLocation[1] === "" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link
                  className={`nav-link ${
                    splitLocation[1] === "about" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex mx-3">
              {active.object.map((element, index) => (
                <div
                  className={toggleActiveStyle(index)}
                  key={index}
                  style={{
                    backgroundColor: `${active.object[index]}`,
                    height: "30px",
                    width: "30px",
                    cursor: "pointer",
                    padding: "10px",
                    filter: "brightness(88%)",
                  }}
                  onClick={() => {
                    toggleActive(index);
                    setcolor(`${active.object[index]}`);
                  }}
                ></div>
              ))}
            </div>
            <div
              className={`form-check form-switch text-${
                props.darkmode === "light" ? "dark" : "light"
              } `}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={() => props.toggledarkmode(color)}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle Mode
              </label>
              {/* <div style={{height:"30px", width: "30px", backgroundColor:"blue"}} onClick={console.log(color)}></div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
