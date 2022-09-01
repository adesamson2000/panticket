import React from "react";
import "./Button.css";
function Button({ title, variation }) {
  return (
    <div>
      <button className={`${variation}-btn btn-style`}>{title} </button>
    </div>
  );
}

export default Button;
