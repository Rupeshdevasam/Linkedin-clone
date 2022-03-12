import React from "react";
import "./Login.css";

const Login = (props) => {
  return (
    <div className="container">
      <nav className="nav">
        <a href="/" className="nav__logo-link">
          <img className="nav__logo-img" src="/images/login-logo.svg" alt="" />
        </a>

        <ul className="nav__menu">
          <li>
            <a href="/" className="nav__menu-link">
              <span className="nav__menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  focusable="false"
                >
                  <path
                    d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="nav__menu__label-text">Discover</span>
            </a>
          </li>
          <li>
            <a href="/" className="nav__menu-link">
              <span className="nav__menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  fill="none"
                  focusable="false"
                >
                  <path
                    d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="nav__menu__label-text">People</span>
            </a>
          </li>
          <li>
            <a href="/" className="nav__menu-link">
              <span className="nav__menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  focusable="false"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"
                    fill="currentColor"
                    fillOpacity=".25"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"
                    fill="currentColor"
                    fillOpacity=".6"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="nav__menu__label-text">Learning</span>
            </a>
          </li>
          <li>
            <a href="/" className="nav__menu-link">
              <span className="nav__menu-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="none"
                  focusable="false"
                >
                  <path
                    d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="nav__menu__label-text">Jobs</span>
            </a>
          </li>
        </ul>

        <div className="nav__cta-container">
          <a href="/" className="nav__button nav__button-primary">
            Join now
          </a>
          <a href="/" className="nav__button nav__button-secondary">
            Sign in
          </a>
        </div>
      </nav>
      <main className="main">
        <div className="main__left">
          <h1 className="main__left-text">
            Welcome to your professional community
          </h1>
          <div className="main__left-form">
            <form className="form flex flex-direction-col" action="">
              <div className="form__input">
                <input
                  className="form__input-input"
                  type="text"
                  placeholder=" "
                  id="email"
                  name="email"
                />
                <label className="form__input-label" htmlFor="email">
                  Email or phone number
                </label>
              </div>
              <div className="form__input">
                <input
                  className="form__input-input"
                  type="text"
                  placeholder=" "
                  id="password"
                  name="password"
                />
                <label className="form__input-label" htmlFor="password">
                  Password
                </label>
              </div>
              <a href="/" className="form__forgot-password-link">
                Forgot password?
              </a>
              <button type="button" className="form__button-submit">
                Sign in
              </button>
            </form>
            <div className="form__divider">
              <span className="form__divider-text">or</span>
            </div>
            <form className="google__cta" action="">
              <button className="google__cta-button">
                <img
                  className="google__cta-button-img"
                  src="/images/google-icon.svg"
                  alt="google-icon"
                />
                <span className="google__cta-button-text">
                  Sign in with Google
                </span>
              </button>
            </form>
          </div>
        </div>
        <img src="/images/login_main.svg" alt="" className="main__right" />
      </main>
      <footer className="li-footer">
        <ul className="li-footer__list">
          <li className="li-footer__item">
            <span className="li-footer__copy-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56 14"
                preserveAspectRatio="xMinYMin meet"
                version="1.1"
                fill="CurrentColor"
                focusable="false"
              >
                <g className="inbug" fillRule="evenodd">
                  <path
                    d="M14,1.25 L14,12.75 C14,13.44 13.44,14 12.75,14 L1.25,14 C0.56,14 0,13.44 0,12.75 L0,1.25 C0,0.56 0.56,0 1.25,0 L12.75,0 C13.44,0 14,0.56 14,1.25"
                    className="bug-text-color"
                    fill="#FFFFFF"
                    transform="translate(42.000000, 0.000000)"
                  ></path>
                  <path
                    d="M56,1.25 L56,12.75 C56,13.44 55.44,14 54.75,14 L43.25,14 C42.56,14 42,13.44 42,12.75 L42,1.25 C42,0.56 42.56,0 43.25,0 L54.75,0 C55.44,0 56,0.56 56,1.25 Z M47,5 L48.85,5 L48.85,6.016 L48.893,6.016 C49.259,5.541 50.018,4.938 51.25,4.938 C53.125,4.938 54,5.808 54,8 L54,12 L52,12 L52,8.75 C52,7.313 51.672,6.875 50.632,6.875 C49.5,6.875 49,7.75 49,9 L49,12 L47,12 L47,5 Z M44,12 L46,12 L46,5 L44,5 L44,12 Z M46.335,3 C46.335,3.737 45.737,4.335 45,4.335 C44.263,4.335 43.665,3.737 43.665,3 C43.665,2.263 44.263,1.665 45,1.665 C45.737,1.665 46.335,2.263 46.335,3 Z"
                    className="background"
                  ></path>
                </g>
                <g className="linkedin-text">
                  <path d="M40,12 L38.107,12 L38.107,11.1 L38.077,11.1 C37.847,11.518 37.125,12.062 36.167,12.062 C34.174,12.062 33,10.521 33,8.5 C33,6.479 34.291,4.938 36.2,4.938 C36.971,4.938 37.687,5.332 37.97,5.698 L38,5.698 L38,2 L40,2 L40,12 Z M36.475,6.75 C35.517,6.75 34.875,7.49 34.875,8.5 C34.875,9.51 35.529,10.25 36.475,10.25 C37.422,10.25 38.125,9.609 38.125,8.5 C38.125,7.406 37.433,6.75 36.475,6.75 L36.475,6.75 Z"></path>
                  <path d="M31.7628,10.8217 C31.0968,11.5887 29.9308,12.0627 28.4998,12.0627 C26.3388,12.0627 24.9998,10.6867 24.9998,8.4477 C24.9998,6.3937 26.4328,4.9377 28.6578,4.9377 C30.6758,4.9377 31.9998,6.3497 31.9998,8.6527 C31.9998,8.8457 31.9708,8.9997 31.9708,8.9997 L26.8228,8.9997 L26.8348,9.1487 C26.9538,9.8197 27.6008,10.5797 28.6358,10.5797 C29.6528,10.5797 30.2068,10.1567 30.4718,9.8587 L31.7628,10.8217 Z M30.2268,7.9047 C30.2268,7.0627 29.5848,6.4297 28.6508,6.4297 C27.6058,6.4297 26.9368,7.0597 26.8728,7.9047 L30.2268,7.9047 Z"></path>
                  <polygon points="18 2 20 2 20 7.882 22.546 5 25 5 21.9 8.199 24.889 12 22.546 12 20 8.515 20 12 18 12"></polygon>
                  <path d="M10,5 L11.85,5 L11.85,5.906 L11.893,5.906 C12.283,5.434 13.031,4.938 14.14,4.938 C16.266,4.938 17,6.094 17,8.285 L17,12 L15,12 L15,8.73 C15,7.943 14.821,6.75 13.659,6.75 C12.482,6.75 12,7.844 12,8.73 L12,12 L10,12 L10,5 Z"></path>
                  <path d="M7,12 L9,12 L9,5 L7,5 L7,12 Z M8,1.75 C8.659,1.75 9.25,2.341 9.25,3 C9.25,3.659 8.659,4.25 8,4.25 C7.34,4.25 6.75,3.659 6.75,3 C6.75,2.341 7.34,1.75 8,1.75 L8,1.75 Z"></path>
                  <polygon points="0 2 2 2 2 10 6 10 6 12 0 12"></polygon>
                </g>
              </svg>
            </span>
            <span className="li-footer__copy-text">© 2022</span>
          </li>
          <li className="li-footer__item">
            <a
              href="https://about.linkedin.com?trk=homepage-basic_footer-about"
              data-tracking-control-name="homepage-basic_footer-about"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              About
            </a>
          </li>
          <li className="li-footer__item">
            <a
              href="https://www.linkedin.com/accessibility?trk=homepage-basic_footer-accessibility"
              data-tracking-control-name="homepage-basic_footer-accessibility"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              Accessibility
            </a>
          </li>
          <li className="li-footer__item">
            <a
              href="https://www.linkedin.com/legal/user-agreement?trk=homepage-basic_footer-user-agreement"
              data-tracking-control-name="homepage-basic_footer-user-agreement"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              User Agreement
            </a>
          </li>
          <li className="li-footer__item">
            <a
              href="https://www.linkedin.com/legal/privacy-policy?trk=homepage-basic_footer-privacy-policy"
              data-tracking-control-name="homepage-basic_footer-privacy-policy"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              Privacy Policy
            </a>
          </li>
          <li className="li-footer__item">
            <a
              href="https://www.linkedin.com/legal/cookie-policy?trk=homepage-basic_footer-cookie-policy"
              data-tracking-control-name="homepage-basic_footer-cookie-policy"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              Cookie Policy
            </a>
          </li>
          <li className="li-footer__item">
            <a
              href="https://www.linkedin.com/legal/copyright-policy?trk=homepage-basic_footer-copyright-policy"
              data-tracking-control-name="homepage-basic_footer-copyright-policy"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              Copyright Policy
            </a>
          </li>
          <li className="li-footer__item">
            <a
              href="https://brand.linkedin.com/policies?trk=homepage-basic_footer-brand-policy"
              data-tracking-control-name="homepage-basic_footer-brand-policy"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              Brand Policy
            </a>
          </li>
          <li className="li-footer__item">
            <a
              href="https://www.linkedin.com/psettings/guest-controls?trk=homepage-basic_footer-guest-controls"
              data-tracking-control-name="homepage-basic_footer-guest-controls"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              Guest Controls
            </a>
          </li>
          <li className="li-footer__item">
            <a
              href="https://www.linkedin.com/legal/professional-community-policies?trk=homepage-basic_footer-community-guide"
              data-tracking-control-name="homepage-basic_footer-community-guide"
              data-tracking-will-navigate=""
              className="li-footer__item-link"
            >
              Community Guidelines
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Login;
