import React from "react";
import "../Home/home.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Filtering } from "../../services/filtering";
import { createPostService } from "../../services/APIservices/FunctionalCalls/createPostHandler";
import { DATAACTIONS } from "../../services/actions";

export const Home = () => {
  const { dataState, dataDispatch, newPost, setNewPost } =
    useContext(DataContext);
  const updatedPosts = Filtering(dataState);

  const handleInput = (e) => {
    setNewPost((newPost) => ({
      ...newPost,
      content: e.target.value,
    }));
  };

  const handleCreatePost = () => {
    createPostService(newPost, dataDispatch, setNewPost);
    setNewPost({
      content: "",
    });
  };

  const isDisabled = !newPost.content || newPost.content.trim().length === 0;

  return (
    <div className="home-main-container">
      <LeftNavLayout />

      <div className="home-middle-container">
        <div className="home-middle-header">
          <div className="home-middle-header-title">Home</div>
          <div className="home-middle-header-filters">
            <div
              className="hmh-filters-trending"
              onClick={() =>
                dataDispatch({
                  type: DATAACTIONS.SETSORTTYPE,
                  payload: "latest",
                })
              }
            >
              Latest
            </div>
            <div
              className="hmh-filters-oldest"
              onClick={() =>
                dataDispatch({
                  type: DATAACTIONS.SETSORTTYPE,
                  payload: "trending",
                })
              }
            >
              Trending
            </div>
          </div>
        </div>

        <div className="hml-create-post">
          <div className="hml-dp-container">
            <img
              src={dataState.loggedInUser.avatarUrl}
              alt="user-dp"
              className="hml-dp"
            />
          </div>

          <div className="add-post-div">
            <div>
              <textarea
                className="add-post-input"
                placeholder="what's happening?"
                type="text"
                name="content"
                value={newPost?.content}
                onChange={handleInput}
              ></textarea>
            </div>
            <div className="post-input-div">
              <button
                disabled={isDisabled}
                className="add-post-btn"
                title={isDisabled ? "Add content" : "Post content"}
                onClick={handleCreatePost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <div>
          <PostsLayout data={updatedPosts} />
        </div>
      </div>
      <RightSideLayout />
    </div>
  );
};
