import axios from "axios";
import { DATAACTIONS } from "../../actions";

export const createPostService = async (post, dataDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await axios.post(
      "/api/posts",
      { postData: post },
      { headers: { authorization: encodedToken } }
    );
    console.log(response);
    dataDispatch({
      type: DATAACTIONS.SETPOSTS,
      payload: response.data.posts,
    });
  } catch (error) {
    console.error(error);
  }
};
