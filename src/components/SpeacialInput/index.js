import styles from "./SpeacialInput.module.css";
import React from "react";

const SpeacialInput = ({
  cssClass = "",
  placeholder = "Enter input",
  id = "",
  name = "",
  type = "text",
}) => {
  return (
    <div className={`${styles.form__input} ${cssClass}`}>
      <input
        className={styles["form__input-input"]}
        type={type}
        placeholder=" "
        id={id}
        name={name}
      />
      <label className={styles["form__input-label"]} htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};

export default SpeacialInput;
