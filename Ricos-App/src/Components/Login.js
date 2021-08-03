import logo from "../img/logo.png";
import ricos from "../img/ricos.png";

import "../css/login.css";

const Login = () => {
  return (
    <div class="main">
      <div className="login-container">
        <div className="logbox">
          <div id="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div id="ricos">
            <img src={ricos} alt="Ricos" />
          </div>
          <div className="form-wrap">
            <form className="form">
              <div className="input-box">
                <input
                  className="input"
                  type="text"
                  id="name"
                  placeholder="Username or email"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  className="input"
                  type="password"
                  id="pass"
                  placeholder="Password"
                  required
                />
              </div>
              <span className="button-box">
                <button className="btn" type="submit" name="submit">
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
              <a hid="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;