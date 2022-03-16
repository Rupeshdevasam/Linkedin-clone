import styles from "./SpeacialButtonPrimary.module.css";
import React from "react";

const SpeacialButtonPrimary = ({
  cssClass = "",
  text = "Click me",
  type = "button",
}) => {
  return (
    <button type={type} className={`${styles["button-primary"]} ${cssClass}`}>
      {text}
    </button>
  );
};

export default SpeacialButtonPrimary;
