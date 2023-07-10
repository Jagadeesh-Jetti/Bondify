import "../PostsLayout/PostsLayout.css";
import { PostCard } from "../../PostCard/PostCard";
import { EditPost } from "../../EditPost/EditPost";
import { DataContext } from "../../../contexts/DataContext";
import { useContext } from "react";

export const PostsLayout = ({ data }) => {
  const { editModal, setEditModal } = useContext(DataContext);
  return (
    <div className="layout-container">
      {data.map((post, index) => (
        <div key={index}>
          <PostCard post={post} />
        </div>
      ))}
      {editModal.modalState && (
        <div
          onClick={() => setEditModal({ modalState: false, postId: "" })}
          className="post-edit_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="post-edit_modal_outer_container"
          >
            <EditPost postId={editModal.postId} />
          </div>
        </div>
      )}
    </div>
  );
};
