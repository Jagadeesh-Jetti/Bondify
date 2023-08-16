import { NavLink } from "react-router-dom";

import { useState, useContext } from "react";

import "../LoginPage/LoginPage.css";
import { AuthContext } from "../../contexts/AuthContext";
import { SignUp } from "../../components/Modals/SignUp/SignUp";

export const SignIn = () => {
  const { loginHandler } = useContext(AuthContext);

  const [signinDetails, setSignInDetails] = useState({
    username: "",
    password: "",
  });

  const handleLogIn = (e) => {
    e.preventDefault();
    if (
      signinDetails.username.trim() === "" ||
      signinDetails.password.trim() === ""
    ) {
      // FillDetails();
    } else {
      loginHandler(signinDetails);
    }
  };

  const handleGuest = () => {
    const credential = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    loginHandler(credential);
  };

  return (
    <div className="signin-parent-div">
      <NavLink className="signin-page-link" to="/">
        <h1 style={{ marginTop: "0" }}> Bondify </h1>
      </NavLink>
      <div className="signin-container">
        <div>
          <h2>Sign In</h2>

          <div className="input-div">
            <p>Username</p>
            <input
              onChange={(e) =>
                setSignInDetails({ ...signinDetails, username: e.target.value })
              }
              placeholder="naruto"
              className="signin-input"
              type="text"
            />
          </div>

          <div className="input-div">
            <p> Password </p>
            <input
              onChange={(e) =>
                setSignInDetails({
                  ...signinDetails,
                  password: e.target.value,
                })
              }
              placeholder="***********"
              className="signin-input"
              type="password"
            />
          </div>
          <div className="signin-btn-div">
            <button onClick={handleLogIn} className="signin-btn">
              SIGN IN
            </button>

            <SignUp />

            <p className="guest" onClick={handleGuest}>
              Sign In as Guest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
