import { useContext } from "react";
import "../Bookmarks/Bookmarks.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { DataContext } from "../../contexts/DataContext";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
// import { PostCard } from "../../components/PostCard/PostCard";

export const Bookmarks = () => {
  const { dataState } = useContext(DataContext);

  const bookmarkedPosts = dataState.bookmarks.map((bookmark) =>
    dataState.posts.find((post) => post._id === bookmark._id)
  );

  console.log(bookmarkedPosts);

  return (
    <div className="bookmarks-container">
      <LeftNavLayout />
      <PostsLayout data={bookmarkedPosts} />
      <RightSideLayout />
    </div>
  );
};
