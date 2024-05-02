import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FaRegHeart, FaRegBookmark, FaRegComment } from "react-icons/fa";
import { likeHandler } from "../../services/APIservices/FunctionalCalls/likeHandler";
import { dislikeHandler } from "../../services/APIservices/FunctionalCalls/dislikeHandler";
import { addBookmarkHandler } from "../../services/APIservices/FunctionalCalls/addBookmarkHandler";
import { removeBookmarkHandler } from "../../services/APIservices/FunctionalCalls/removeBookmarkHandler";
import { isPostBookmarked } from "../../services/checkers/isPostBookmarked";
import { DataContext } from "../../contexts/DataContext";
import "../PostActions/PostActions.css";

export const PostActions = ({ post }) => {
  const { dataState, dataDispatch } = useContext(DataContext);

  const { _id, likes, comments } = post;

  return (
    <div className="post-actions">
      <div className="post-actions-comment">
        <FaRegComment />
        {comments?.length > 0 ? comments?.length : null}
      </div>
      <div
        className="post-actions-like"
        onClick={() =>
          likes?.likedBy?.length !== 0
            ? dislikeHandler(_id, dataDispatch)
            : likeHandler(_id, dataDispatch)
        }
      >
        {likes?.likedBy?.length !== 0 ? (
          <FontAwesomeIcon icon={faHeart} />
        ) : (
          <FaRegHeart />
        )}
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
        {isPostBookmarked(_id, dataState) ? (
          <FontAwesomeIcon icon={faBookmark} />
        ) : (
          <FaRegBookmark />
        )}
      </div>
    </div>
  );
};
