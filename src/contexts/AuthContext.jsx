import { createContext, useContext, useState } from "react";
import {
  signupCall,
  loginCall,
} from "../services/APIservices/AuthenticationCalls/authenticationCalls";
import { useNavigate } from "react-router-dom";
import { DATAACTIONS } from "../services/actions";
import { DataContext } from "./DataContext";

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
        // console.log(response.data.encodedToken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signupHandler = async (signupDetails) => {
    try {
      const response = await signupCall(signupDetails);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
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
