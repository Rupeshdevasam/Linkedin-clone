import "./SpeacialButtonPrimary.css";
import React from "react";

const SpeacialButtonPrimary = ({ text = "Click me", type = "button" }) => {
  return (
    <button type={type} className="button-primary">
      {text}
    </button>
  );
};

export default SpeacialButtonPrimary;
