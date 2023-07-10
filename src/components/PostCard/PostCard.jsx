import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../PostCard/PostCard.css";
import { likeHandler } from "../../services/APIservices/FunctionalCalls/likeHandler";
import { dislikeHandler } from "../../services/APIservices/FunctionalCalls/dislikeHandler";
import { addBookmarkHandler } from "../../services/APIservices/FunctionalCalls/addBookmarkHandler";
import { isPostBookmarked } from "../../services/checkers/isPostBookmarked";
import { removeBookmarkHandler } from "../../services/APIservices/FunctionalCalls/removeBookmarkHandler";
import { deletePostHandler } from "../../services/APIservices/FunctionalCalls/deletePostHandler";

export const PostCard = ({ post }) => {
  const { dataState, dataDispatch, setEditModal } = useContext(DataContext);
  const {
    _id,
    content,
    likes,
    comments,
    username,
    mediaURL,
    createdAt,
    updatedAt,
  } = post;

  const clickedUser = dataState.users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );

  const loggedInUser = dataState.loggedInUser;

  const user = clickedUser || loggedInUser;

  return (
    <div className="post-card">
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
                edit
              </div>
              <div onClick={() => deletePostHandler(_id, dataDispatch)}>
                delete
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

        <div className="post-actions">
          <div className="post-actions-comment">
            comment {comments?.length > 0 ? comments?.length : null}
          </div>
          <div
            className="post-actions-like"
            onClick={() =>
              likes?.likedBy?.length !== 0
                ? dislikeHandler(_id, dataDispatch)
                : likeHandler(_id, dataDispatch)
            }
          >
            {likes?.likedBy?.length !== 0 ? <FaAngleDown /> : <FaAngleUp />}
            {likes?.likeCount > 0 ? likes.likeCount : null}
          </div>
          <div
            className="post-actions-bookmark"
            onClick={() => {
              isPostBookmarked(_id, dataState)
                ? removeBookmarkHandler(_id, dataDispatch)
                : addBookmarkHandler(_id, dataDispatch);
            }}
          >
            {isPostBookmarked(_id, dataState)
              ? "already bookmarked"
              : "bookmark"}
          </div>
          {/* <div className="post-actions-share">share</div> */}
        </div>
      </div>
    </div>
  );
};
