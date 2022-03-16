import styles from "./SpeacialInput.module.css";
import React from "react";

const SpeacialInput = ({
  cssClass = "",
  inputCSS = "",
  placeholder = "Enter input",
  id = "",
  name = "",
  type = "text",
}) => {
  return (
    <span className={`${styles.form__input} ${cssClass}`}>
      <input
        className={`${styles["form__input-input"]} ${inputCSS}`}
        type={type}
        placeholder=" "
        id={id}
        name={name}
      />
      <label className={styles["form__input-label"]} htmlFor={id}>
        {placeholder}
      </label>
    </span>
  );
};

export default SpeacialInput;
