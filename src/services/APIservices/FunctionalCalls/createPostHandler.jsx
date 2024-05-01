import axios from "axios";
import { DATAACTIONS } from "../../actions";

export const createPostService = async (post, dataDispatch, setNewPost) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await axios.post(
      "/api/posts",
      { postData: post },
      { headers: { authorization: encodedToken } }
    );
    console.log(response.data.posts);
    dataDispatch({
      type: DATAACTIONS.SETPOSTS,
      payload: response.data.posts,
    });
    setNewPost("");
  } catch (error) {
    console.error(error);
  }
};
