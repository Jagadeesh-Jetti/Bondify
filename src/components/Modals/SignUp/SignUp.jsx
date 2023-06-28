import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/reactjs-popup.esm.js";
import "../SignUp/SignUp.css";
import { Login } from "../Login/Login";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log(formData);
  };

  return (
    <div>
      <Popup trigger={<div className="signup"> Sign up </div>} modal nested>
        {(close) => (
          <div className="modal">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
              <div>
                Already have an account? <h4>Login</h4>
                <Login />
              </div>
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
};