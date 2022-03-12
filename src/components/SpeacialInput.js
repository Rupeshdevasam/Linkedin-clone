import "./SpeacialInput.css";
import React from "react";

const SpeacialInput = ({
  placeholder = "Enter input",
  id = "",
  name = "",
  type = "text",
}) => {
  return (
    <div className="form__input">
      <input
        className="form__input-input"
        type={type}
        placeholder=" "
        id={id}
        name={name}
      />
      <label className="form__input-label" htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};

export default SpeacialInput;
