import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Modals/Login/Login";
import { SignUp } from "../../components/Modals/SignUp/SignUp";
import "../Startup/Startup.css";

export const Startup = () => {
  const navigate = useNavigate();
  return (
    <div className="startup-container">
      <div className="startup-image-container">
        <img
          src="https://img.freepik.com/free-photo/happy-friends-looking-social-media-smartphone_53876-102034.jpg?size=626&ext=jpg&ga=GA1.1.1780405632.1684308011&semt=ais"
          alt="loading"
          className="startup-image"
        />
      </div>
      <div className="startup-content-container">
        <div className="startup-content">
          <div>
            <SignUp />
          </div>
          <div className="login" onClick={() => navigate("/login")}>
            Login
          </div>
          {/* <div className="login">Login</div> */}
          {/* <div className="login-as-guest">Guest Login </div> */}
        </div>
      </div>
    </div>
  );
};
