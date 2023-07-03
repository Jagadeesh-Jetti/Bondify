import axios from "axios";
import { DATAACTIONS } from "../../actions";

export const deletePostHandler = async (postId, dataDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: encodedToken,
      },
    });

    dataDispatch({
      type: DATAACTIONS.SETPOSTS,
      payload: response.data.posts,
    });
    console.log(response.data.posts);
  } catch (error) {
    console.error(error);
  }
};
