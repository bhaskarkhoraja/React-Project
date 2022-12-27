import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="my-3" style={{ height: "60px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.tp} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {capitalize(props.alert.tp === "danger" ? "Error" : props.alert.tp)}{" "}
          </strong>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
