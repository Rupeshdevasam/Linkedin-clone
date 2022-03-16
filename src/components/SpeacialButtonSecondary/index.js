import styles from "./SpeacialButtonSecondary.module.css";
import React from "react";

const SpeacialButtonSecondary = ({
  cssClass = "",
  imgSrc = "",
  imgAlt = "",
  text = "Click me",
}) => {
  return (
    <button className={`${styles["button-secondary"]} ${cssClass}`}>
      {imgSrc.length > 0 && (
        <img
          className={styles["button-secondary-img"]}
          src={imgSrc}
          alt={imgAlt}
        />
      )}
      <span className={styles["button-secondary-text"]}>{text}</span>
    </button>
  );
};

export default SpeacialButtonSecondary;
