import styles from "./SpeacialDivider.module.css";
import React from "react";

const SpeacialDivider = ({ cssClass = "", text = "text" }) => {
  return (
    <div className={`${styles.form__divider} ${cssClass}`}>
      <span className={styles["form__divider-text"]}>{text}</span>
    </div>
  );
};

export default SpeacialDivider;
