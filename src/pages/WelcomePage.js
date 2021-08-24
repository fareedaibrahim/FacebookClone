import React, { useState, useContext } from "react";

import authApi from "../api/auth"
import { routes } from "./routes";
import store from "../store/store"
import Modal from "../components/Modal";
import logo from "../static/img/logo.svg";
import AppContext from "../store/AppContext";
import questionMark from "../static/img/q.svg";
import {getSequence, getMonths} from "../utils/date";
import style from "../static/css/WelcomePage.module.css";


const WelcomePage = ({ history }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({ phone: "", password: "" });

  const context = useContext(AppContext);

  const handleData = ({ target: { value } }, field) => {
    setData({ ...data, [field]: value });
  }

  const handleLogin = async (e) => {
    setError("")
    e.preventDefault();
    setLoading(true);
    const result = await authApi.login(data);
    if(!result.status) {
      setLoading(false);
      return setError("Incorrect Username or Password");}
    context.setToken(result.data);
    store.setItem("token", result.data);
    setLoading(false);
  }

  const disabledProp = loading ? { disabled : 'true' } : {}

  return (
    <section className={style.container}>
      <div className={style.leftSection}>
        <div>
          <img src={logo} alt="Facebook Logo" className={style.logo}></img>
          <p className={style.welcomeText}>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
      </div>
      <div className={style.rightSection}>
        <div className={style.rightSectionContainer}>
          <form method="post" action="" className={style.form}>
            <input
              type="number"
              name="email"
              placeholder="Email address or phone number"
              className={style.field}
              onChange={(e) => handleData(e, "phone")}
            />
            <p className={style.error}>{error}</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={style.field}
              onChange={(e) => handleData(e, "password")}
            />
            <button
              {...disabledProp}
              type="submit" 
              name="Submit" 
              onClick={handleLogin}
              className={loading ? style.disabled : style.primaryButton}>
              Login
            </button>
            <a
              href="#b"
              onClick={() => history.push(routes.forgotPasswordPage)}
              className={style.forgotPasswordLink}
            >
              Forgotten Password
            </a>
            <hr className={style.hr}></hr>
            <input
              value=" Create New Account"
              type="button"
              className={style.secondaryButton}
              onClick={() => setModalVisible(true)}
            />
          </form>
          <div className={style.createPageLink}>
            <a href="#b"> Create a Page </a> for a celebrity, band or business.
          </div>
        </div>
      </div>
      
      {/* Modal Starts here */}
      <Modal
        title="Sign Up"
        subtitle="It's quick and easy."
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <div className={style.modalContainer}>
          <div className={style.person}>
            <input
              type="text"
              placeholder="First name"
              className={style.modalField}
            />
            <input
              type="text"
              placeholder="Surname"
              className={style.modalField}
            />
          </div>
          <input
            type="text"
            placeholder="Surname"
            className={style.credsField}
          />
          <input
            type="text"
            placeholder="Surname"
            className={style.credsField}
          />

          <div className={style.bioData}>
            <label>
              Date of birth
              <img src={questionMark} className={style.questionMark} alt="question mark" />
            </label>
            <div className={style.dob}>
              <select className={style.selectField}>
                <option selected disabled>
                  Day
                </option>
                {getSequence(1, 31).map((day, index) => (
                  <option key={index}>{day}</option>
                ))}
              </select>
              <select className={style.selectField}>
                <option selected disabled>
                  Month
                </option>
                {getMonths().map((month, index) => (
                  <option value={month} key={index}>{month}</option>
                ))}
              </select>
              <select className={style.selectField}>
                <option selected disabled>
                  Year
                </option>
                {
                  getSequence(1905, 2021)
                  .reverse()
                  .map((year, index) => (
                    <option value={year} key={index}>{year}</option>
                  ))}
              </select>
            </div>
            <label>
              Gender
              <img src={questionMark} className={style.questionMark} alt="question mark" />
            </label>
            <div className={style.dob}>
              <button className={style.genderButton}>
                <label>Female</label>
                <input type="radio" name="gender" value="Female" />
              </button>
              <button className={style.genderButton}>
                <label>Male</label>
                <input type="radio" name="gender" value="Male" />
              </button>
              <button className={style.genderButton}>
                <label>Custom</label>
                <input type="radio" name="gender" value="Custom" />
              </button>
            </div>
            <p className={style.terms}>
              By clicking Sign Up, you agree to our <a href="#f">Terms</a>, <a href="#d">Date Policy</a> and
              <a href="#c"> Cookie Policy</a>. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
            <button className={style.signUpButton}>
              Sign Up
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default WelcomePage; 