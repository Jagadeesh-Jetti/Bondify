import axios from "axios";
import { DATAACTIONS } from "../../actions";

export const unfollowHandler = async (userId, dataDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await axios.post(
      `/api/users/unfollow/${userId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    dataDispatch({
      type: DATAACTIONS.SETLOGGEDINUSER,
      payload: response?.data?.user,
    });
    console.log(response.data.user);
  } catch (error) {
    console.error(error);
  }
};
