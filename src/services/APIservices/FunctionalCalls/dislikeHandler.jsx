import axios from "axios";
import { DATAACTIONS } from "../../actions";

export const dislikeHandler = async (postId, dataDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response?.status === 201) {
      dataDispatch({
        type: DATAACTIONS.SETPOSTS,
        payload: response.data.posts,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
