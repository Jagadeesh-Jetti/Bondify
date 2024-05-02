import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import "../LeftNavLayout/LeftNavLayout.css";

export const LeftNavLayout = () => {
  const navigate = useNavigate();
  const { dataState } = useContext(DataContext);

  return (
    <div className="home-side-nav">
      <div className="home-side-nav-content">
        <h3> Bondify </h3>
        <div className="ind-div" onClick={() => navigate("/home")}>
          <i className="fas fa-home sidebar-icon"></i>
          <span className="sidebar-text">Home</span>
        </div>

        <div className="ind-div" onClick={() => navigate("/explore")}>
          <i className="fas fa-search sidebar-icon"></i>
          <span className="sidebar-text">Explore</span>
        </div>

        <div className="ind-div" onClick={() => navigate("/bookmark")}>
          <i className="far fa-bookmark sidebar-icon"></i>
          <span className="sidebar-text">Bookmarks</span>
        </div>

        <div
          className="ind-div"
          onClick={() =>
            navigate(`/profile/${dataState.loggedInUser.username}`)
          }
        >
          <i className="far fa-user sidebar-icon"></i>
          <span className="sidebar-text">Profile</span>
        </div>
        <h3 className="ind-div" onClick={() => navigate("/login")}>
          <i className="fas fa-sign-out-alt sidebar-icon"></i>
          <span className="sidebar-text">Logout</span>
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
