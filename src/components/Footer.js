import "./Footer.css";
import React from "react";

const Footer = ({ backgroundColor = "#ffffff" }) => {
  return (
    <footer
      style={{ "--background-color": backgroundColor }}
      className="li-footer"
    >
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
  );
};

export default Footer;