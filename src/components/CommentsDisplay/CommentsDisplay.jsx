import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "../CommentsDisplay/CommentsDisplay.css";

export const CommentsDisplay = ({ post }) => {
  const { dataState } = useContext(DataContext);

  const getCommentedUser = (username) => {
    return dataState.users.find((user) => user?.username === username)
      .avatarUrl;
  };

  const getFullName = (username) => {
    const user = dataState.users.find((user) => user.username === username);
    const fullName = user.firstName + " " + user.lastName;
    return fullName;
  };

  return (
    <div>
      {post?.comments?.map((comment) => (
        <div className="post_comment">
          <div className="comment_dp_container">
            <img
              src={getCommentedUser(comment.username)}
              alt="comment user dp"
              className="comment_dp_image"
            />
          </div>
          <div className="comment_content_container">
            <div className="comment_name_header">
              <div className="comment_fullname">
                {getFullName(comment.username)}
              </div>
              <div className="comment_username"> @{comment.username}</div>
              <div className="comment_options_container">
                <div className="comment_option">edit</div>
                <div className="comment_option"> delete</div>
              </div>
            </div>
            <div className="comment_text">{comment.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
