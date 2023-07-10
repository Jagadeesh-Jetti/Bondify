import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const signupCall = async (signupDetails) => {
  try {
    const response = await axios.post("/api/auth/signup", signupDetails);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const loginCall = async (loginDetails) => {
  try {
    const { username, password } = loginDetails;
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
