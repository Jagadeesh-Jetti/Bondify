import { useContext } from "react";
import "../Bookmarks/Bookmarks.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { DataContext } from "../../contexts/DataContext";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
// import { PostCard } from "../../components/PostCard/PostCard";

export const Bookmarks = () => {
  const { dataState } = useContext(DataContext);
  console.log(dataState.bookmarks);

  return (
    <div className="bookmarks-container">
      <LeftNavLayout />
      <PostsLayout data={dataState?.bookmarks} />
      <RightSideLayout />
    </div>
  );
};
