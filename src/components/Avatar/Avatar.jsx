import { useContext } from "react";
import "../Avatar/Avatar.css";
import { useState } from "react";
// import { AvatarAlert, AvatarUpdate } from "../../../ToastUtils";
import { DataContext } from "../../contexts/DataContext";
import { AvatarOptions } from "../../services/avatarStore";
import { DATAACTIONS } from "../../services/actions";

export const Avatar = () => {
  const { dataDispatch, setAvatar } = useContext(DataContext);

  const [isAvatar, setIsAvatar] = useState("");

  return (
    <div>
      <div className="avatars-div">
        {AvatarOptions.map((avatars, index) => (
          <div key={index}>
            {" "}
            <img
              onClick={() => setIsAvatar(() => avatars)}
              className="avatars-img"
              src={avatars}
              alt="user avatar"
            />{" "}
          </div>
        ))}
      </div>
      <button
        className="avatars-btn"
        onClick={() => {
          if (isAvatar.length === 0) {
            // AvatarAlert();
            setAvatar(false);
          } else {
            // setUser((user) => ({
            //   ...user,
            //   profilePicture: isAvatar,
            // }));
            dataDispatch({ type: DATAACTIONS.SETAVATAR, payload: isAvatar });
            // AvatarUpdate();
            setAvatar(false);
          }
        }}
      >
        Set Avatar
      </button>
    </div>
  );
};
