import axios from "axios";
import { DATAACTIONS } from "../../actions";
// import { useContext } from "react";
// import { DataContext } from "../../../contexts/DataContext";

export const createPostService = async (post, dataDispatch, setNewPost) => {
  //   const { setNewPost } = useContext(DataContext);
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await axios.post(
      "/api/posts",
      { postData: post },
      { headers: { authorization: encodedToken } }
    );

    dataDispatch({
      type: DATAACTIONS.SETPOSTS,
      payload: response.data.posts,
    });
    setNewPost("");
  } catch (error) {
    console.error(error);
  }
};
