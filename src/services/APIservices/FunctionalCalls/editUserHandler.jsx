import axios from "axios";
import { DATAACTIONS } from "../../actions";

export const editUserHandler = async (
  userData,
  dataDispatch,
  setEditUserModal
) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const response = await axios.post(
      `/api/users/edit/`,
      { userData },
      {
        headers: { authorization: encodedToken },
      }
    );
    if (response.status === 201) {
      dataDispatch({
        type: DATAACTIONS.SETLOGGEDINUSER,
        payload: response.data.user,
      });
      console.log(response.data.user);
      setEditUserModal(false);
    }
  } catch (error) {
    console.error(error);
  }
};
