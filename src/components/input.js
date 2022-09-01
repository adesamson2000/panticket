import React from "react";
import "./Input.css";
function Input({ label, placeholder, type, name, onChange, value }) {
  return (
    <div className="input-container">
      <label>{label} </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
