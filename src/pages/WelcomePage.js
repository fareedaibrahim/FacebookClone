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
  const [loginData, setLoginData] = useState({ phone: "", password: "" });
  const [signUpData, setSignUpData] = useState({})

  const [dob, setDob] = useState({
    day: "",
    month: "",
    year: ""
  });

  const context = useContext(AppContext);

  const handleLoginData = ({ target: { value } }, field) => {
    setLoginData({ ...loginData, [field]: value });
  }
  
  const handleSignUpData = ({ target : { value } }, field) => {
    setSignUpData({...signUpData, [field] : value})
  }
  
  const handleDob = ({ target: { value } }, field) => {
    setDob({...dob, [field]: value})
  }

  const handleLogin = async (e) => {
    setError("")
    e.preventDefault();
    setLoading(true);
    const result = await authApi.login(loginData);
    if(!result.status) {
      setLoading(false);
      return setError("Incorrect Username or Password");}
    context.setToken(result.data);
    store.setItem("token", result.data);
    setLoading(false);
  }

  const handleSignUp = async () => {
    const newDOB = `${dob.day}/${dob.month}/${dob.year}`;
    setSignUpData({...signUpData, dob: newDOB})
    
    const result =  await authApi.signUp(signUpData);
    console.log("done")
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
              onChange={(e) => handleLoginData(e, "phone")}
            />
            <p className={style.error}>{error}</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={style.field}
              onChange={(e) => handleLoginData(e, "password")}
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
              onChange={(e) => handleSignUpData(e, "first_name")}
              className={style.modalField}
            />
            <input
              type="text"
              placeholder="Surname"
              onChange={(e) => handleSignUpData(e, "surname")}
              className={style.modalField}
            />
          </div>
          <input
            type="text"
            placeholder="Othername"
            onChange={(e) => handleSignUpData(e, "other_name")}
            className={style.credsField}
          />
          <input
            type="text"
            placeholder="Phone or Email"
            onChange={(e) => handleSignUpData(e, "phone")}
            className={style.credsField}
          />

          <div className={style.bioData}>
            <label>
              Date of birth
              <img src={questionMark} className={style.questionMark} alt="question mark" />
            </label>
            <div className={style.dob}>
              <select className={style.selectField} onChange={(e) => handleDob(e, "day")}>
                <option selected disabled>
                  Day
                </option>
                {getSequence(1, 31).map((day, index) => (
                  <option key={index}>{day}</option>
                ))}
              </select>
              <select className={style.selectField} onChange={(e) => handleDob(e, "month")}>
                <option selected disabled>
                  Month
                </option>
                {getMonths().map((obj, index) => (
                  <option value={obj.month_number} key={index}>{obj.month_name}</option>
                ))}
              </select>
              <select className={style.selectField} onChange={(e) => handleDob(e, "year")}>
                <option selected disabled>
                  Year
                </option>
                {getSequence(1905, 2021)
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
                <input
                  type="radio" 
                  name="gender" 
                  value="Female"
                  onChange={(e) => handleSignUpData(e, "gender")}
                />
              </button>
              <button className={style.genderButton}>
                <label>Male</label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="Male" 
                  onChange={(e) => handleSignUpData(e, "gender")}
                />
              </button>
              <button className={style.genderButton}>
                <label>Custom</label>
                <input 
                  type="radio" 
                  name="gender" 
                  value="Custom" 
                  onChange={(e) => handleSignUpData(e, "gender")}
                />
              </button>
            </div>
            <p className={style.terms}>
              By clicking Sign Up, you agree to our <a href="#f">Terms</a>, <a href="#d">Date Policy</a> and
              <a href="#c"> Cookie Policy</a>. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
            <button className={style.signUpButton} onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default WelcomePage; 