import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "../PostCard/PostCard.css";
import { deletePostHandler } from "../../services/APIservices/FunctionalCalls/deletePostHandler";
import { useNavigate } from "react-router-dom";
import { PostActions } from "../PostActions/PostActions";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { dataState, dataDispatch, setEditModal } = useContext(DataContext);
  const { _id, content, username, mediaURL, createdAt, updatedAt } = post;

  const clickedUser = dataState.users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );

  const loggedInUser = dataState.loggedInUser;

  const user = clickedUser || loggedInUser;

  return (
    <div
      className="post-card"
      onClick={() => navigate(`/users/${user._id}/posts/${_id}`)}
    >
      <div className="profile-picture-container">
        <img src={user?.avatarUrl} alt="loading" className="profile-picture" />
      </div>
      <div className="profile-content-card">
        <div className="post-header">
          <div className="post-header-name">{user?.firstName}</div>
          <div className="post-header-username">@{user?.username}</div>
          {user?.username === loggedInUser?.username && (
            <div className="options">
              <div
                onClick={() =>
                  setEditModal({
                    modalState: true,
                    postId: _id,
                  })
                }
              >
                Edit
              </div>
              <div onClick={() => deletePostHandler(_id, dataDispatch)}>
                Delete
              </div>
            </div>
          )}
        </div>
        <div className="post-content">{content}</div>
        {mediaURL && (
          <div className="post-image">
            <img src={mediaURL} alt="loading" />
          </div>
        )}
        <PostActions post={post} />
      </div>
    </div>
  );
};
