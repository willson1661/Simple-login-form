import "../styles.css";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MyButton from "./MyButton";

const Signup = () => {
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
            <h1 className="headtext">Sign up</h1>
            <div className="underlinee"></div>
          </div>
          <div className="name">
            <input type="text" placeholder="Name" />
            <span className="t1"></span>
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
              {passwordShown ? <FaEye /> : <FaEyeSlash />}{" "}
            </div>
            <span className="t1"></span>
          </div>
        </div>

        <button className="login1">
          <MyButton to="Signup" />
        </button>
        <button className="login111">
          <MyButton to="Login" />
        </button>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};
export default Signup;
