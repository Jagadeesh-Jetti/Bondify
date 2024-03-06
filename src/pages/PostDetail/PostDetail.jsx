import React, { useContext } from "react";
import "../PostDetail/PostDetail.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { IoIosArrowBack } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { UserCard } from "../../components/UserCard/UserCard";

export const PostDetail = () => {
  let { postId } = useParams();
  const { dataState } = useContext(DataContext);

  // Find the post and user
  let post = dataState.posts.find((post) => post._id === postId);
  let user = dataState.users.find((user) => user.username === post.username);

  // Convert createdAt timestamp to human-readable date and time
  const createdDate = new Date(post.createdAt);
  const formattedDate = createdDate.toLocaleDateString();
  const formattedTime = createdDate.toLocaleTimeString();

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

          <div className="post-content">{post.content}</div>
          {post.mediaURL && (
            <div className="post-pic">
              <img src={post.mediaURL} alt="Post Media" />
            </div>
          )}
          <div className="post-time-detail">{`${formattedDate} ${formattedTime}`}</div>
          <div className="post-actions">comment retweet like bookmark</div>
        </div>
        <div className="post-reply-container">
          <div className="post-dp">image</div>
          <div className="post-reply-text-input">text to be typed</div>
          <div className="post-reply-button">reply button clickable</div>
        </div>
        <div className="comment-section"></div>
      </div>

      <RightSideLayout />
    </div>
  );
};
