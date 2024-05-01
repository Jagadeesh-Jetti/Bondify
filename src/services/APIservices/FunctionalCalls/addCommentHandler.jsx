import axios from "axios";
import { DATAACTIONS } from "../../actions";

export const addCommentHandler = async (postId, dataDispatch, commentData) => {
  try {
    console.log("entered handler");
    const encodedToken = localStorage.getItem("token");
    const response = await axios.post(
      `api/comments/add/${postId}`,
      { commentData },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response.status === 201) {
      dataDispatch({
        type: DATAACTIONS.SETPOSTS,
        payload: response?.data?.posts,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
