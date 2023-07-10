import React, { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { editUserHandler } from "../../services/APIservices/FunctionalCalls/editUserHandler";
import "./EditUser.css";
import { Avatar } from "../Avatar/Avatar";

export const EditUser = () => {
  const { dataState, setEditUserModal, dataDispatch, avatar, setAvatar } =
    useContext(DataContext);

  const [user, setUser] = useState(dataState.loggedInUser);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  console.log(user);

  return (
    <div>
      <div className="edit-inner-div">
        {/* <h3>First Name</h3> */}
        <img src={user?.avatarUrl} alt="avatar" className="user-avatar" />
        <h3 onClick={() => setAvatar(true)}> Change avatar </h3>
      </div>
      <div className="edit-inner-div">
        <h3>First Name</h3>
        <input
          placeholder="First Name"
          type="text"
          value={user.firstName}
          onChange={handleInput}
          name="firstName"
        />
      </div>
      <div className="edit-inner-div">
        <h3>Last Name</h3>
        <input
          placeholder="Last Name"
          type="text"
          value={user.lastName}
          onChange={handleInput}
          name="lastName"
        />
      </div>
      {/* <div className="edit-inner-div">
        <h3>Username</h3>
        <input
          placeholder="Username"
          type="text"
          value={user.username}
          onChange={handleInput}
          name="username"
        />
      </div> */}
      <div className="edit-inner-div">
        <h3>Bio</h3>
        <textarea
          placeholder="Bio"
          value={user.bio}
          onChange={handleInput}
          name="bio"
          rows="5"
        ></textarea>
      </div>
      <div className="edit-inner-div">
        <h3>Website</h3>
        <input
          placeholder="url"
          type="text"
          value={user.website}
          onChange={handleInput}
          name="website"
        />
      </div>
      <button
        type="submit"
        className="edit-user-btn"
        onClick={(e) => {
          e.preventDefault();
          editUserHandler(user, dataDispatch, setEditUserModal);
        }}
      >
        Save Changes
      </button>
      {avatar && (
        <div
          onClick={() => setAvatar(false)}
          className="avatar_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="avatar_modal_outer_container"
          >
            <Avatar />
          </div>
        </div>
      )}
    </div>
  );
};
