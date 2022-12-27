import React from "react";

export default function About(props) {
  let theme = {
    color: props.darkmode === "light" ? "black" : "white",
    backgroundColor: props.darkmode === "light" ? "white" : "#232b44",
  };

  return (
    <>
      <div style={theme}>
        <h1>About</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                style={theme}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={theme}
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong>
                  Your First item here
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={theme}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={theme}
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong>
                   Your Second item here
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={theme}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={theme}
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong>
                  Your Third item here
              </div>
            </div>
          </div>
        </div>
        {/* <button
          type="button"
          className="btn btn-primary my-3"
          onClick={darkmode}
        >
          {btntext}
        </button> */}
      </div>
    </>
  );
}
