import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { unfollowHandler } from "../../services/APIservices/FunctionalCalls/unfollowHandler";
import { followHandler } from "../../services/APIservices/FunctionalCalls/followHandler";

export const UserCard = ({ user, followOption }) => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const navigate = useNavigate();

  const isFollowed = (userId) =>
    dataState.loggedInUser?.following?.some(({ _id }) => _id === userId);

  return (
    <div className="rsl-usercard" key={user._id}>
      <div
        className="rsl-usercard-dp-container"
        onClick={() => navigate(`/profile/${user.username}`)}
      >
        <img src={user.avatarUrl} alt="loading" className="rsl-usercard-dp" />
      </div>
      <div
        className="rsl-usercard-name-card"
        onClick={() => navigate(`/profile/${user.username}`)}
      >
        <div className="rsl-usercard-fullname">
          {user.firstName} {user.lastName}
        </div>
        <div className="rsl-usercard-username"> @{user.username}</div>
      </div>
      {followOption && (
        <div
          className="rsl-usercard-follow"
          onClick={() => {
            isFollowed(user._id)
              ? unfollowHandler(user._id, dataDispatch)
              : followHandler(user._id, dataDispatch);
          }}
        >
          {isFollowed(user._id) ? "Unfollow" : "Follow"}
        </div>
      )}
    </div>
  );
};
