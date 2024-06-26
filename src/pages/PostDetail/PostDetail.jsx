import React, { useContext, useState } from "react";
import "../PostDetail/PostDetail.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { UserCard } from "../../components/UserCard/UserCard";
import { PostActions } from "../../components/PostActions/PostActions";
import { CommentsDisplay } from "../../components/CommentsDisplay/CommentsDisplay";
import { addCommentHandler } from "../../services/APIservices/FunctionalCalls/addCommentHandler";

export const PostDetail = () => {
  let { postId, userId } = useParams();
  const { dataState, dataDispatch } = useContext(DataContext);
  const [commentInput, setCommentInput] = useState("");

  const heroUser = dataState?.loggedInUser;

  let post = dataState.posts.find((post) => post._id === postId);
  let user = dataState.users.find((user) => user._id === userId);

  const createdDate = new Date(post.createdAt);

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dayOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedTime = createdDate.toLocaleString("en-US", timeOptions);
  const formattedDay = createdDate.toLocaleString("en-US", dayOptions);

  return (
    <div className="post-detail-main">
      <LeftNavLayout />

      <div className="post-detail-middle-container">
        <div className="post-detail-nav">
          <div className="left-arrow-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="post-detail-post-title">Post</div>
        </div>
        <div className="post-container">
          <div className="post-user">
            <UserCard user={user} followOption={false} />
          </div>

          <div className="post-detail-content">{post.content}</div>
          {post.mediaURL && (
            <div className="post-pic">
              <img src={post.mediaURL} alt="Post Media" />
            </div>
          )}
          <div className="post-time-detail">
            <div className="post-time">{formattedTime}</div>
            <div className="dot"> • </div>
            <div className="post-day">{formattedDay}</div>
          </div>
          <div className="actions-upperline"></div>
          <div className="post-detail-actions">
            <PostActions post={post} />
          </div>

          <div className="actions-upperline"></div>
        </div>
        <div className="post-reply-container">
          <div className="post-reply-dp-container">
            <img
              src={heroUser.avatarUrl}
              alt="loading"
              className="post-reply-dp-image"
            />
          </div>
          <div className="post-reply-text-input">
            <input
              type="text"
              value={commentInput}
              onChange={handleCommentInput}
              placeholder="Post your reply"
            />
          </div>
          <div className="post-reply-button">
            <button
              disabled={!commentInput}
              onClick={() =>
                addCommentHandler(postId, dataDispatch, commentInput)
              }
            >
              {" "}
              Reply{" "}
            </button>
          </div>
        </div>

        <div className="comment-section">
          <CommentsDisplay post={post} />
        </div>
      </div>

      <RightSideLayout />
    </div>
  );
};
