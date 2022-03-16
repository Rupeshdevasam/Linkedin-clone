import React, { useState } from "react";
import Footer from "../../components/Footer";
import styles from "./LandingPage.module.css";
import SpeacialButtonPrimary from "../../components/SpeacialButtonPrimary";
import SpeacialButtonSecondary from "../../components/SpeacialButtonSecondary";
import SpeacialInput from "../../components/SpeacialInput";
import StarterHeader from "../../components/StarterHeader";

const LandingPage = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="container">
      <StarterHeader />
      <main className={styles.main}>
        <div className={styles.main__left}>
          <h1 className={styles["main__left-text"]}>
            Welcome to your professional community
          </h1>
          <div className={styles["main__left-form"]}>
            <form className="form flex flex-direction-col" action="">
              <SpeacialInput
                placeholder="Email or phone number"
                id="email"
                name="email"
                type="text"
              />
              <div className={styles.form__password}>
                <SpeacialInput
                  className={styles["form__password-input"]}
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
              <a href="/" className={styles["form__forgot-password-link"]}>
                Forgot password?
              </a>
              <SpeacialButtonPrimary text="Sign in" />
            </form>
            <div className={styles.form__divider}>
              <span className={styles["form__divider-text"]}>or</span>
            </div>
            <form className={styles.google__cta} action="">
              <SpeacialButtonSecondary
                text="Sign in with Google"
                imgSrc="/images/google-icon.svg"
                imgAlt="google-icon"
              />
            </form>
          </div>
        </div>
        <img
          src="/images/login_main.svg"
          alt=""
          className={styles.main__right}
        />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
