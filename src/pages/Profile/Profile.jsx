import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import "../Profile/Profile.css";

export const Profile = () => {
  const { username } = useParams();
  const { dataState } = useContext(DataContext);

  const clickedUser = dataState.users.find(
    (user) => user.username === username
  );

  const clickedUserPosts = dataState.posts.filter(
    (post) => post.username === username
  );

  console.log(clickedUser);
  return (
    <div className="profile-container">
      <LeftNavLayout />
      <div className="profile-middle-container">
        <div className="profilepage-header-name-container">
          <div className="profilepage-header-name">
            {clickedUser?.firstName} {clickedUser.lastName}
          </div>
        </div>
        <div className="profilepage-content-body">
          <div className="profilepage-profile">
            <div className="profilepage-profile-banner"> upper half banner</div>
            <div className="profilepage-profile-content">
              <div className="profilepage-profile-content-dp-edit">
                <div className="profilepage-profile-content-dp-parent-container">
                  <div className="profilepage-profile-content-dp-container">
                    <img
                      src={clickedUser.avatarUrl}
                      alt="loading..."
                      className="profile-dp-image"
                    />
                  </div>
                </div>
                <div className="profilepage-profile-content-edit">
                  Edit profile
                </div>
              </div>
              <div className="profilepage-profile-content-name-username">
                <div className="profilepage-profile-content-name">
                  {clickedUser.firstName} {clickedUser.lastName}
                </div>
                <div className="profilepage-profile-content-username">
                  @{clickedUser.username}
                </div>
              </div>
              <div className="profilepage-profile-content-bio">
                {clickedUser.bio}
              </div>
              <div className="profilepage-profile-content-website">
                <Link>{clickedUser.website}</Link>
              </div>
              <div className="profilepage-profile-content-follow">
                <div className="profilepage-profile-content-followers">
                  {clickedUser.followers.length} followers
                </div>
                <div className="profilepage-profile-content-following">
                  {clickedUser.following.length} following
                </div>
              </div>
            </div>
          </div>
          <div className="profilepage-profile-navbar"> nav bar </div>
          <div className="profilepage-profile-tweets">
            <PostsLayout data={clickedUserPosts} />
          </div>
        </div>
      </div>
      <RightSideLayout />
    </div>
  );
};
