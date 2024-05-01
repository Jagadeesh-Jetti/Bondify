import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "../PostCard/PostCard.css";
import { deletePostHandler } from "../../services/APIservices/FunctionalCalls/deletePostHandler";
import { useNavigate } from "react-router-dom";
import { PostActions } from "../PostActions/PostActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { PostOptions } from "../Modals/PostOptions/PostOptions";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const {
    dataState,
    dataDispatch,
    setEditModal,
    openPostOptionsModal,
    SetOpenPostOptionsModal,
  } = useContext(DataContext);
  const { _id, content, username, mediaURL, createdAt, updatedAt } = post;

  const clickedUser = dataState.users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );

  const loggedInUser = dataState.loggedInUser;

  const user = clickedUser || loggedInUser;

  return (
    <div className="post-card">
      <div
        className="profile-picture-container"
        onClick={() => navigate(`/users/${user._id}/posts/${_id}`)}
      >
        <img src={user?.avatarUrl} alt="loading" className="profile-picture" />
      </div>
      <div className="profile-content-card">
        <div className="post-header">
          <div
            className="post-header-name"
            onClick={() => navigate(`/users/${user._id}/posts/${_id}`)}
          >
            {user?.firstName}
          </div>
          <div
            className="post-header-username"
            onClick={() => navigate(`/users/${user._id}/posts/${_id}`)}
          >
            @{user?.username}
          </div>
          {user?.username === loggedInUser?.username && (
            <div
              className="options"
              onClick={() => {
                SetOpenPostOptionsModal({
                  modalState: true,
                  postId: _id,
                });
              }}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          )}
        </div>
        <div
          className="post-content"
          onClick={() => navigate(`/users/${user._id}/posts/${_id}`)}
        >
          {content}
          {mediaURL && (
            <div className="post-image">
              <img
                src={mediaURL}
                alt="loading"
                className="post-content-image"
              />
            </div>
          )}
        </div>
        {openPostOptionsModal && (
          <div
            className="post-options_modal_outer_div"
            onClick={() => SetOpenPostOptionsModal(false)}
          >
            <div className="post-options_modal_outer_container">
              <PostOptions />
            </div>
          </div>
        )}
        <PostActions post={post} />
      </div>
    </div>
  );
};
