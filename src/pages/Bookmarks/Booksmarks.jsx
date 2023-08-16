import { useContext } from "react";
import "../Bookmarks/Bookmarks.css";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import { DataContext } from "../../contexts/DataContext";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";

export const Bookmarks = () => {
  const { dataState } = useContext(DataContext);

  const bookmarkedPosts = dataState.bookmarks.map((bookmark) =>
    dataState.posts.find((post) => post?._id === bookmark?._id)
  );

  return (
    <div className="bookmarks-container">
      <LeftNavLayout />
      <div className="bookmarks-middle-container">
        <div className="bmc-header">
          <div className="bmc-header-title">Bookmarks</div>
          <div className="bmc-header-subtitle">
            @{dataState.loggedInUser.username}
          </div>
        </div>
        <div>
          <PostsLayout data={bookmarkedPosts} />
        </div>
      </div>
      <RightSideLayout />
    </div>
  );
};
