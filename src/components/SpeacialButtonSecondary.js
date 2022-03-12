import "./SpeacialButtonSecondary.css";
import React from "react";

const SpeacialButtonSecondary = ({
  imgSrc = "",
  imgAlt = "",
  text = "Click me",
}) => {
  return (
    <button className="button-secondary">
      {imgSrc.length > 0 && (
        <img className="button-secondary-img" src={imgSrc} alt={imgAlt} />
      )}
      <span className="button-secondary-text">{text}</span>
    </button>
  );
};

export default SpeacialButtonSecondary;
