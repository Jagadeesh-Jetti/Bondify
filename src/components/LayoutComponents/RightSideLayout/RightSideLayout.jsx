import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import "../RightSideLayout/RightSideLayout.css";
import { followHandler } from "../../../services/APIservices/FunctionalCalls/followHandler";
import { unfollowHandler } from "../../../services/APIservices/FunctionalCalls/unfollowHandler";
import { useNavigate } from "react-router-dom";

export const RightSideLayout = () => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const navigate = useNavigate();

  const isFollowed = (userId) => {
    return dataState.loggedInUser?.following?.some(({ _id }) => _id === userId);
  };

  return (
    <div className="home-right-container">
      <div className="rsl-search-container">
        <input type="search" className="rsl-search" placeholder="Search" />
      </div>
      <div className="rsl-users-container">
        <div className="rsl-users-container-name">
          <h2> Who to follow </h2>
        </div>
        <div>
          {dataState.users.map((user) => (
            <div className="rsl-usercard" key={user._id}>
              <div
                className="rsl-usercard-dp-container"
                onClick={() => navigate(`/profile/${user.username}`)}
              >
                <img
                  src={user.avatarUrl}
                  alt="loading"
                  className="rsl-usercard-dp"
                />
              </div>
              <div
                className="rsl-usercard-name"
                onClick={() => navigate(`/profile/${user.username}`)}
              >
                <div>
                  {user.firstName} {user.lastName}
                </div>
                <div> @{user.username}</div>
              </div>
              <div
                className="rsl-usercard-follow"
                onClick={() => {
                  isFollowed(user._id)
                    ? unfollowHandler(user._id, dataDispatch)
                    : followHandler(user._id, dataDispatch);
                }}
              >
                {isFollowed(user._id) ? "unfollowed" : "follow"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
