import "../Home/home.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { DATAACTIONS } from "../../services/actions";
import { Filtering } from "../../services/filtering";

export const Home = () => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const updatedPosts = Filtering(dataState);
  return (
    <div className="home-main-container">
      <LeftNavLayout />

      <div className="home-middle-container">
        <div className="home-middle-header">
          <div className="home-middle-header-title">Home</div>
          {/* <div className="home-middle-header-nav">
            <h4> For you </h4>
            <h4> Following </h4>
          </div> */}
        </div>
        <div className="home-middle-header-filters">
          <div
            className="hmh-filters-trending"
            onClick={() =>
              dataDispatch({
                type: DATAACTIONS.SETSORTTYPE,
                payload: "trending",
              })
            }
          >
            Trending
          </div>
          <div
            className="hmh-filters-oldest"
            onClick={() =>
              dataDispatch({
                type: DATAACTIONS.SETSORTTYPE,
                payload: "older",
              })
            }
          >
            Oldest
          </div>
        </div>
        <PostsLayout data={updatedPosts} />
      </div>
      <RightSideLayout />
    </div>
  );
};
