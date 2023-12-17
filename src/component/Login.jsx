import "../styles.css";
import React, { useState } from "react";
import MyButton from "./MyButton";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div class="cards">
      <div className="container">
        <div className="box"></div>

        <div className="Sign up">
          <div className="header">
            <h1 className="headtext">Login</h1>
            <div className="underlinee"></div>
          </div>

          <div className="name">
            <input
              id="email"
              placeholder="Email"
              name="email"
              type="email"
              required
            />
            <span className="t1"></span>
          </div>

          <div className="password">
            <input
              placeholder="Password"
              type={passwordShown ? "text" : "password"}
            />
            <span className="t1"></span>
            <div className="eye" onClick={togglePasswordVisiblity}>
              {passwordShown ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        <button className="login1">
          <MyButton target="_blank" to="Signup" />
        </button>
        <button className="login111">
          <MyButton target="_blank" to="Login" />
        </button>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};
export default Login;
