import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const avgReadTime = () => {
    let sec =
      0.48 *
      text.split(/\s+/).filter((element) => {
        return element.length !== 0;
      }).length;

    let ret = "";
    if (sec >= 3600) {
      const hr = sec / 3600;
      ret += " " + Math.floor(hr) + "h";
      sec %= 3600;
    }

    if (sec > 60) {
      const min = sec / 60;
      ret += " " + Math.floor(min) + "m";
      sec %= 60;
    }

    ret += " " + Math.floor(sec) + "s";
    return ret;
  };

  const handleUPChange = () => {
    let newtext = document
      .getElementById("exampleFormControlTextarea1")
      .value.toUpperCase();
    document.getElementById("exampleFormControlTextarea1").value = newtext;
    settext(newtext);
    props.showalert("Converted to Upper Case", "success");
  };
  const handledownChange = () => {
    let newtext = document
      .getElementById("exampleFormControlTextarea1")
      .value.toLowerCase();
    document.getElementById("exampleFormControlTextarea1").value = newtext;
    settext(newtext);
    props.showalert("Converted to Lower Case", "success");
  };
  const handleSpace = () => {
    let newtext = document
      .getElementById("exampleFormControlTextarea1")
      .value.split(/[ ]+/);
    document.getElementById("exampleFormControlTextarea1").value =
      newtext.join(" ");
    settext(newtext.join(" "));
    props.showalert("Extra spaces have been removed", "success");
  };
  const handleonChange = (event) => {
    settext(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text copied to clipboard", "success");
  };
  const [text, settext] = useState("");

  return (
    <>
      <div
        className={`mb-3 text-${props.darkmode === "light" ? "dark" : "light"}`}
      >
        <h1>{props.title}</h1>
        <textarea
          style={{
            backgroundColor: props.darkmode === "dark" ? "grey" : "white",
            color: props.darkmode === "dark" ? "white" : "black",
          }}
          className="form-control"
          onChange={handleonChange}
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleUPChange}
        >
          Convert to uppercase
        </button>
        {/* {console.log(props.darkmode)}
        {console.log(props.darkmode === "light" ? "light" : "dark")} */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handledownChange}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleCopy}
        >
          Copy to clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleSpace}
        >
          Remove extra space
        </button>
        <h2>Details of your words</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} letters
        </p>
        <p>Average time to read this text is {avgReadTime()}</p>
        <h2>Summary</h2>
        <pre
          style={{
            fontFamily: "sans-serif",
            lineHeight: "24px",
            fontSize: "16px",
          }}
        >
          {text.length === 0 ? "No text to preview" : text}
        </pre>
      </div>
    </>
  );
}

Textform.prototype = {
  title: PropTypes.string.isRequired,
};
