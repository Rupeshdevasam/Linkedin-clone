import React, { useState } from "react";
import Footer from "./Footer";
import "./Login.css";
import SpeacialButtonPrimary from "./SpeacialButtonPrimary";
import SpeacialButtonSecondary from "./SpeacialButtonSecondary";
import SpeacialInput from "./SpeacialInput";
import StarterHeader from "./StarterHeader";

const Login = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="container">
      <StarterHeader />
      <main className="main">
        <div className="main__left">
          <h1 className="main__left-text">
            Welcome to your professional community
          </h1>
          <div className="main__left-form">
            <form className="form flex flex-direction-col" action="">
              <SpeacialInput
                placeholder="Email or phone number"
                id="email"
                name="email"
                type="text"
              />
              <div className="form__password">
                <SpeacialInput
                  className="form__password-input"
                  placeholder="Password"
                  id="password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                />
                <button
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  type="button"
                  className="form__password-show"
                >
                  {isPasswordVisible ? "Hide" : "Show"}
                </button>
              </div>
              <a href="/" className="form__forgot-password-link">
                Forgot password?
              </a>
              <SpeacialButtonPrimary text="Sign in" />
            </form>
            <div className="form__divider">
              <span className="form__divider-text">or</span>
            </div>
            <form className="google__cta" action="">
              <SpeacialButtonSecondary
                text="Sign in with Google"
                imgSrc="/images/google-icon.svg"
                imgAlt="google-icon"
              />
            </form>
          </div>
        </div>
        <img src="/images/login_main.svg" alt="" className="main__right" />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
