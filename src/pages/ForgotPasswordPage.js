import React from "react";
import Logo from "../components/Logo";

import style from "../static/css/ForgotPassword.module.css";
import { routes } from "./routes";

const ForgotPasswordPage = ({ history }) => {
  return (
    <section className={style.container}>
      <nav className={style.navBar}>
        <Logo />
        <ul className={style.navItems}>
          <span>
            <input
              type="text"
              placeholder="Email or phone"
              className={style.field}
            />
          </span>
          <span>
            <input
              type="password"
              placeholder="Password"
              className={style.field}
            />
          </span>
          <span>
            <button className={style.primaryButton}>Log In</button>
          </span>
          <span>
            <a className={style.forgotPasswordLink} href="#b">
              Forgotten Password?
            </a>
          </span>
        </ul>
      </nav>
      <div className={style.body}>
        <div className={style.card}>
          <div className={style.cardHeader}>
            <h3>Find Your Account</h3>
          </div>
          <hr className={style.hr} />
          <div className={style.cardBody}>
            <p>
              Please enter your email address or mobile number to search for
              your account.
            </p>
            <input type="text" placeholder="Mobile number" />
          </div>
          <hr className={style.hr} />
          <div className={style.cardFooter}>
            <input
              onClick={() => history.push(routes.welcomepage)}
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