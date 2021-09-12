import React, { useState } from "react";
import logo from "../img/logo.png";
import ricos from "../img/ricos.png";
import Register from "./Register";
import { useForm } from "react-hook-form";
import axios from 'axios';
import "../css/login.css";
import { Redirect, useHistory } from "react-router-dom";

const Login = () => {
  // Toggle Register
  const [openReg, setRegOpen] = useState(false)
  const history = useHistory();

  /* Validation */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8081/users/login", data)
      .then((res) => {
        console.log(res)
        if (res.status == 200) {
          localStorage.setItem('jwt', res.data)
          history.go(0) // refresh page and be re-routed to main
        }
      })
      .catch((err) => {
        console.error(err)
      });
  };
    
  return (
    <>
      <div className="login-main">
        <div className="login-container">
          <div className="logbox">
            <div id="login-logo">
              <img src={logo} alt="Logo" />
            </div>
            <div id="login-ricos">
              <img src={ricos} alt="Ricos" />
            </div>
            <div className="login-form-wrap">
              <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="login-input-box">
                  <input
                    {...register("name", {
                      required: true,
                      maxLength: 30,
                    })}
                    className={`specific-login-input login-input`}
                    type="text"
                    id="name"
                    placeholder="Username or email"
                    required
                  />
                  {
                    /* Error Message - Username */
                    errors.name?.type === "required" && (
                      <p className="login-validation-error">
                        Username or Email address is required
                      </p>
                    )
                  }
                </div>
                <div className="login-input-box">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 30,
                    })}
                    className={`specific-login-input login-input`}
                    type="password"
                    id="pass"
                    placeholder="Password"
                    required
                  />
                </div>
                {
                  /* Error Message - Password */
                  errors.password && (
                    <p className="login-validation-error">
                      Password must contain at least 6 characters
                    </p>
                  )
                }
                <span className="login-button-box">
                  <button className="login-btn" type="submit" name="submit">
                    Log in
                  </button>
                </span>
                <span className="forgot-box">
                  <a className="forgot" hid="">
                    Forgot password?
                  </a>
                </span>
              </form>
            </div>
            <div className="logbox">
              <p className="text">
                Don't have an account?
                <a
                  hid="#"
                  onClick={() => {
                    setRegOpen(true);
                  }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {openReg && <Register setOpenReg={setRegOpen} />}
    </>
  );
};

export default Login;
