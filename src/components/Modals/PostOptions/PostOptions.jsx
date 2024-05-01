import { useContext } from "react";
import "../PostOptions/PostOptions.css";
import { DataContext } from "../../../contexts/DataContext";
import { deletePostHandler } from "../../../services/APIservices/FunctionalCalls/deletePostHandler";
import "../PostOptions/PostOptions.css";

export const PostOptions = () => {
  const { openPostOptionsModal, setEditModal, dataDispatch } =
    useContext(DataContext);
  return (
    <div className="post-options-component">
      <div className="post-options-container">
        <div
          className="post-option"
          onClick={() =>
            setEditModal({
              modalState: true,
              postId: openPostOptionsModal.postId,
            })
          }
        >
          Edit
        </div>
        <div
          className="post-option"
          onClick={() =>
            deletePostHandler(openPostOptionsModal.postId, dataDispatch)
          }
        >
          Delete
        </div>
        <div className="post-option"> Follow</div>
      </div>
    </div>
  );
};
