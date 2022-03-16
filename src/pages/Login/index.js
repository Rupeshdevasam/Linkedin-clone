import styles from "./Login.module.css";
import React, { useState } from "react";
import StarterHeader from "../../components/StarterHeader";
import Footer from "../../components/Footer";
import SpeacialInput from "../../components/SpeacialInput";
import SpeacialButtonPrimary from "../../components/SpeacialButtonPrimary";
import SpeacialDivider from "../../components/SpeacialDivider";
import SpeacialButtonSecondary from "../../components/SpeacialButtonSecondary";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="container">
      <StarterHeader
        cssClass={styles.header}
        menuVisible={false}
        signInButtonVisible={false}
        joinNowButtonVisible={false}
      />
      <div className={styles.main}>
        <div className={styles["card-layout"]}>
          <div className={styles.card__header}>
            <h1 className={styles.card__header__heading}>Sign in</h1>
            <p className={styles.card__header__subheading}>
              Stay updated on your professional world
            </p>
          </div>
          <form className={styles.form}>
            <SpeacialInput
              inputCSS={`${styles.form__email}`}
              placeholder="Email or Phone"
              id="email"
              name="email"
              type="text"
            />
            <div className={styles.form__password}>
              <SpeacialInput
                placeholder="Password"
                id="password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
              />
              <button
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                type="button"
                className={styles["form__password-show"]}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
            <a className={styles["forgot-password"]} href="/">
              Forgot password?
            </a>
            <SpeacialButtonPrimary
              cssClass={styles.signin__button}
              text="Sign in"
            />
          </form>
          <SpeacialDivider text="or" />
          <form className={styles.apple__cta} action="">
            <SpeacialButtonSecondary
              cssClass={styles.apple__button}
              text="Sign in with Apple"
              imgSrc="/images/apple-logo-icon.svg"
              imgAlt="google-icon"
            />
          </form>
        </div>
        <div className={styles.join__now}>
          New to LinkedIn?
          <a href="/" className={styles.join__now__button}>
            Join now
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
