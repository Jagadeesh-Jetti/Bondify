import "../Home/home.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export const Home = () => {
  const { dataState } = useContext(DataContext);
  return (
    <div className="home-main-container">
      <LeftNavLayout />
      <div className="home-middle-container">
        <div className="home-middle-header">
          <div className="home-middle-header-title">
            <h3>Home</h3>
          </div>
          <div className="home-middle-header-nav">
            <h4> For you </h4>
            <h4> Following </h4>
          </div>
          <PostsLayout data={dataState.posts} />
        </div>
      </div>
      <RightSideLayout />
    </div>
  );
};
