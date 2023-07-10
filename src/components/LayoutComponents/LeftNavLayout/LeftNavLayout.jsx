import { useNavigate } from "react-router-dom";
import "../LeftNavLayout/LeftNavLayout.css";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

export const LeftNavLayout = () => {
  const navigate = useNavigate();
  const { dataState } = useContext(DataContext);
  // console.log(loggedInUser);
  return (
    <div className="home-side-nav">
      <div className="home-side-nav-content">
        <h3> Bondify </h3>
        {/* <h3 onClick={() => navigate("/startup")}> Startup </h3> */}
        <h3 onClick={() => navigate("/home")}> Home </h3>
        <h3 onClick={() => navigate("/explore")}> Explore </h3>
        <h3 onClick={() => navigate("/bookmark")}> Bookmarks </h3>
        <h3
          onClick={() =>
            navigate(`/profile/${dataState.loggedInUser.username}`)
          }
        >
          Profile
        </h3>
      </div>
      <div
        className="lsr-userProfile"
        onClick={() => navigate(`/profile/${dataState.loggedInUser.username}`)}
      >
        <div className="image-container">
          <img
            src={dataState.loggedInUser?.avatarUrl}
            alt="loading..."
            className="image"
          />
        </div>
        <div>
          <div>{dataState.loggedInUser?.firstName}</div>
          <div> @{dataState.loggedInUser?.username} </div>
        </div>
      </div>
    </div>
  );
};
