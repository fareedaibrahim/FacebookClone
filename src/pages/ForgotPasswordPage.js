import React from "react";
import Logo from "../components/Logo";

import style from "../static/css/ForgotPassword.module.css";

const ForgotPasswordPage = () => {
  return (
    <section className={style.container}>
      <nav className={style.navBar}>
        <Logo />
        <ul className={style.navItems}>
          <li>
            <input
              type="text"
              placeholder="Email or phone"
              className={style.field}
            />
          </li>
          <li>
            <input
              type="password"
              placeholder="Password"
              className={style.field}
            />
          </li>
          <li>
            <button className={style.primaryButton}>Log In</button>
          </li>
          <li>
            <a className={style.forgotPasswordLink} href="#b">
              Forgotten Password?
            </a>
          </li>
        </ul>
      </nav>
      <div className={style.body}>
        <div className={style.card}>
          <h3>Find Your Account</h3>
          <hr />
          <input type="text" placeholder="Mobile number" />
          <hr />
          <div className={style.cardFooter}>
            <input
              type="button"
              value="Cancel"
              className={style.cancelButton}
            />
            <input
              type="button"
              value="Search"
              className={style.searchButton}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
