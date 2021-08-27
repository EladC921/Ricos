import "../css/register.css";
import axios from 'axios';

const Register = ({ setOpenReg }) => {
  /*checkPass = () => {
    /*Checks Password and Repeat Password equality --
  };*/

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, mail, firstname, lastname } = this.state;

    const user = {
      username,
      password,
      mail,
      firstname,
      lastname
    };

    axios
      .post('http://localhost:3001/postUser', user)
      .then(() => console.log('User Created'))
      .catch(err => {
        console.error(err);
      });
  };

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
      <form className="reg-modal-content" onSubmit={this.handleSubmit}>
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
                name="firstname"
                className="reg-input"
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
                name="lastname"
                className="reg-input"
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
                name="email"
                className="reg-input"
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
                name="psw"
                className="reg-input"
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
