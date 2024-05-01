import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import "../EditPost/EditPost.css";
import { DATAACTIONS } from "../../services/actions";

export const EditPost = ({ postId }) => {
  const {
    dataState: { posts },
    dataDispatch,
    setEditModal,
  } = useContext(DataContext);

  const editPost = async (postId, postData, encodedToken, setEditModal) => {
    try {
      const res = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        {
          headers: { authorization: encodedToken },
        }
      );
      dataDispatch({ type: DATAACTIONS.SETPOSTS, payload: res.data.posts });
      setEditModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const encodedToken = localStorage.getItem("token");

  const handleInput = (e) => {
    setIsEditPost({ ...isEditPost, content: e.target.value });
  };

  const post = posts.find(({ _id }) => _id === postId);

  const [isEditPost, setIsEditPost] = useState({
    content: post?.content,
    postImage: post?.postImage,
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", width: "-webkit-fill-available" }}>
        <textarea
          value={isEditPost?.content}
          onChange={(e) => handleInput(e)}
          name="content"
          id="content"
          rows="5"
        ></textarea>
      </div>
      {/* <div>
        <img
          alt="post-img"
          src={isEditPost?.postImage}
          style={{ height: "20rem", width: "30rem", borderRadius: "5px" }}
        />
      </div> */}
      <button
        onClick={() =>
          editPost(post._id, isEditPost, encodedToken, setEditModal)
        }
      >
        Save Changes
      </button>
    </div>
  );
};
