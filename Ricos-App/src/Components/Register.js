import "../css/register.css";
import axios from "axios";
import { useState } from "react";

const Register = ({ setOpenReg }) => {
  /*checkPass = () => {
    /*Checks Password and Repeat Password equality --
  };*/
  const [input, setInput] = useState({
    username: "",
    password: "",
    mail: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const _input = { ...input };
    _input[e.target.name] = e.target.value;
    setInput(_input);
    //console.log(_input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/postUser", input)
      .then(() => console.log("User Created"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id="id01" className="reg-modal">
      <span
        onClick={() => {
          setOpenReg(false);
        }}
        className="reg-close"
        title="Close Modal"
      >
        X
      </span>
      <form className="reg-modal-content" onSubmit={handleSubmit}>
        <div className="reg-container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr className="reg-hr" />

          <div className="reg-input-box">
            <label>
              <b>First Name</b>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                className="reg-input"
                /* */
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="reg-input-box">
            <label>
              <b>Last Name</b>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                className="reg-input"
                /* */
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="reg-input-box">
            <label>
              <b>Username</b>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                className="reg-input"
                /* */
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="reg-input-box">
            <label>
              <b>Email</b>
              <input
                type="text"
                placeholder="Enter Email"
                name="mail"
                className="reg-input"
                /* */
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="reg-input-box">
            <label>
              <b>Password</b>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="reg-input"
                /* */
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="reg-input-box">
            <label>
              <b>Repeat Password</b>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                className="reg-input"
                /*onChange={checkPass}*/
                required
              />
            </label>
          </div>

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <div className="reg-clearfix">
            <button
              type="button"
              onClick={() => {
                setOpenReg(false);
              }}
              className={`reg-button reg-cancelbtn`}
            >
              Cancel
            </button>
            <button type="submit" className={`reg-signupbtn reg-button`}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
