import { useContext } from "react";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import "../Explore/Explore.css";
import { DataContext } from "../../contexts/DataContext";

export const Explore = () => {
  const { dataState } = useContext(DataContext);
  return (
    <div className="explore-container">
      <LeftNavLayout />
      <div className="explore-middle-container">
        <PostsLayout data={dataState?.posts} />
      </div>

      <RightSideLayout />
    </div>
  );
};
