import axios from "axios";
import { DATAACTIONS } from "../../actions";

export const addBookmarkHandler = async (postId, dataDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (response?.status === 200) {
      dataDispatch({
        type: DATAACTIONS.SETBOOKMARKS,
        payload: response?.data?.bookmarks,
      });
      console.log(response.data.bookmarks);
    }
  } catch (error) {
    console.error(error);
  }
};
