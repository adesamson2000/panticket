import React from "react";

function input({ label, placeholder, type, name, onChange, value }) {
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

export default input;
