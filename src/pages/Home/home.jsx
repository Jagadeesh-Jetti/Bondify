import React from "react";
import "../Home/home.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
// import { DATAACTIONS } from "../../services/actions";
import { Filtering } from "../../services/filtering";
import { createPostService } from "../../services/APIservices/FunctionalCalls/createPostHandler";

export const Home = () => {
  const { dataState, dataDispatch, newPost, setNewPost } =
    useContext(DataContext);
  const updatedPosts = Filtering(dataState);

  // const [newPost, setNewPost] = useState({
  //   content: "",
  //   postImage: "",
  // });

  const handleInput = (e) => {
    setNewPost((newPost) => ({
      ...newPost,
      content: e.target.value,
    }));
  };

  const handleImg = (e) => {
    const files = e.target.files[0];
    setNewPost((newPost) => ({
      ...newPost,
      postImage: URL.createObjectURL(files),
    }));
  };

  const handleCreatePost = () => {
    createPostService(newPost, dataDispatch, setNewPost);
  };

  const isDisabled =
    newPost.content?.trim().length === 0 && newPost.postImage === "";

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

          <div className="add-post-div">
            <div>
              <textarea
                className="add-post-input"
                placeholder="what's happning?"
                type="text"
                name="content"
                value={newPost?.content}
                onChange={handleInput}
              >
                {" "}
              </textarea>
            </div>
            <>
              {newPost?.postImage && (
                <>
                  <img
                    className="add-post-img"
                    src={newPost?.postImage}
                    alt="new post"
                  />
                </>
              )}
            </>
            <div className="post-input-div">
              <input
                id="file"
                type="file"
                onChange={handleImg}
                accept="image/*"
              />
              <label htmlFor="file">
                <i className="fa-regular fa-image fa-lg"></i>
              </label>{" "}
              <button
                disabled={isDisabled}
                className="add-post-btn"
                title={isDisabled ? "Add content" : "Post content"}
                onClick={handleCreatePost}
              >
                Post
              </button>{" "}
            </div>
          </div>
        </div>
        <PostsLayout data={updatedPosts} />
      </div>
      <RightSideLayout />
    </div>
  );
};
