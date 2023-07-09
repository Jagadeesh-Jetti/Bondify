import React, { useState } from "react";
import "../Home/home.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { DATAACTIONS } from "../../services/actions";
import { Filtering } from "../../services/filtering";

export const Home = () => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const updatedPosts = Filtering(dataState);

  const [postContent, setPostContent] = useState("");

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleCreatePost = () => {
    // Handle logic to create a post with the postContent
    // You can make an API call or dispatch an action to update the state

    // Example using dataDispatch:
    dataDispatch({
      type: DATAACTIONS.CREATE_POST,
      payload: {
        content: postContent,
        // Additional properties for the new post
      },
    });

    // Reset the postContent state after creating the post
    setPostContent("");
  };

  return (
    <div className="home-main-container">
      <LeftNavLayout />

      <div className="home-middle-container">
        <div className="home-middle-header">
          <div className="home-middle-header-title">Home</div>
        </div>
        <div className="home-middle-header-filters">{/* Filters code */}</div>
        <div className="hml-create-post">
          <div className="hml-dp-container">
            <img
              src={dataState.loggedInUser.avatarUrl}
              alt="user-dp"
              className="hml-dp"
            />
          </div>
          <div className="hml-create-post-input">
            <textarea
              value={postContent}
              onChange={handlePostContentChange}
              placeholder="What's happening?"
              maxLength={280}
              className="hml-create-post-textarea"
            />
            <div className="hml-create-post-footer">
              <div className="hml-create-post-counter">
                {280 - postContent.length}
              </div>
              <button
                className={`hml-create-post-button ${
                  postContent.length === 0 ? "disabled" : ""
                }`}
                onClick={handleCreatePost}
                disabled={postContent.length === 0}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <PostsLayout data={updatedPosts} />
      </div>
      <RightSideLayout />
    </div>
  );
};
