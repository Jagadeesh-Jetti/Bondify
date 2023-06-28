import React, { useContext } from "react";
import "./Login.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/reactjs-popup.esm.js";
import { SignUp } from "../SignUp/SignUp";
import { AuthContext } from "../../../contexts/AuthContext";

export const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <div>
      <Popup trigger={<div className="login">Login</div>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="modal-login-close" onClick={close}>
              close
            </div>
            <div className="modal-login-header">Log in to Bondify</div>

            <form onSubmit={handleLogin} className="login-form">
              <div className="modal-login-field-container">
                <input
                  type="text"
                  placeholder="Username"
                  className="login-username"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-password"
                />
              </div>

              <button type="submit" className="modal-login">
                Login
              </button>
            </form>

            <button
              className="modal-guest"
              onClick={() =>
                loginHandler({
                  username: "adarshbalika",
                  password: "adarshBalika123",
                })
              }
            >
              Login as Guest
            </button>

            <div className="modal-login-footer">
              Don't have an account?
              <div>
                <SignUp />
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
