import { createContext, useContext, useState } from "react";
import {
  signupCall,
  loginCall,
} from "../services/APIservices/AuthenticationCalls/authenticationCalls";
import { useNavigate } from "react-router-dom";
import { DATAACTIONS } from "../services/actions";
import { DataContext } from "./DataContext";
import { AvatarOptions } from "../services/avatarStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { dataDispatch } = useContext(DataContext);

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const loginHandler = async (loginDetails) => {
    try {
      const response = await loginCall(loginDetails);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response?.data?.foundUser));

        dataDispatch({
          type: DATAACTIONS.SETLOGGEDINUSER,
          payload: response.data.foundUser,
        });
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signupHandler = async (signupDetails) => {
    try {
      const { name, username, email, password, confirmPassword } =
        signupDetails;
      const response = await signupCall({
        name,
        username,
        email,
        password,
        confirmPassword,
        avatarUrl:
          AvatarOptions[Math.floor(Math.random() * AvatarOptions?.length)],
      });

      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);

        dataDispatch({
          type: DATAACTIONS.SETLOGGEDINUSER,
          payload: response.data.foundUser,
        });

        toast.success("Signup successful!, Please login now.", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 5000,
        });
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    loginHandler,
    signupHandler,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
