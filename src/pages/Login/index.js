import styles from "./Login.module.css";
import React from "react";
import StarterHeader from "../../components/StarterHeader";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <div className="container">
      <StarterHeader
        classNames={styles.header}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
