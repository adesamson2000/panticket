import React from "react";
import "./Button.css";
function Button({ onClick, title, variation }) {
  return (
    <div>
      <button onClick={onClick} className={`${variation}-btn btn-style`}>
        {title}
      </button>
    </div>
  );
}

export default Button;
