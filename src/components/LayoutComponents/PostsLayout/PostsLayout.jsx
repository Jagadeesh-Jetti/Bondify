import "../PostsLayout/PostsLayout.css";
import { PostCard } from "../../PostCard/PostCard";

export const PostsLayout = ({ data }) => {
  return (
    <div className="layout-container">
      {data.map((post, index) => (
        <div key={index}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
