import { useNavigate } from "react-router-dom";
import "../LeftNavLayout/LeftNavLayout.css";
export const LeftNavLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="home-side-nav">
      <div className="home-side-nav-content">
        <h3> Bondify </h3>
        <h3 onClick={() => navigate("/startup")}> Startup </h3>
        <h3 onClick={() => navigate("/")}> Home </h3>
        <h3 onClick={() => navigate("/explore")}> Explore </h3>
        <h3 onClick={() => navigate("/bookmark")}> Bookmarks </h3>
        <h3> Profile </h3>
      </div>
    </div>
  );
};
