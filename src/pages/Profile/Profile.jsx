import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { LeftNavLayout } from "../../components/LayoutComponents/LeftNavLayout/LeftNavLayout";
import { PostsLayout } from "../../components/LayoutComponents/PostsLayout/PostsLayout";
import { RightSideLayout } from "../../components/LayoutComponents/RightSideLayout/RightSideLayout";
import "../Profile/Profile.css";
import { EditUser } from "../../components/EditUser/EditUser";

export const Profile = () => {
  const { username } = useParams();
  const { dataState, editUserModal, setEditUserModal } =
    useContext(DataContext);

  const clickedUser = () => {
    if (dataState.loggedInUser.username === username) {
      return dataState.loggedInUser;
    } else {
      return dataState.users.find((user) => user.username === username);
    }
  };

  const clickedUserPosts = dataState.posts.filter(
    (post) => post.username === username
  );

  return (
    <div className="profile-container">
      <LeftNavLayout />
      <div className="profile-middle-container">
        <div className="profilepage-header-name-container">
          <div className="profilepage-header-name">
            {clickedUser()?.firstName || ""} {clickedUser()?.lastName || ""}
          </div>
        </div>
        <div className="profilepage-content-body">
          <div className="profilepage-profile">
            <div className="profilepage-profile-banner"> </div>
            <div className="profilepage-profile-content">
              <div className="profilepage-profile-content-dp-edit">
                <div className="profilepage-profile-content-dp-parent-container">
                  <div className="profilepage-profile-content-dp-container">
                    <img
                      src={clickedUser()?.avatarUrl}
                      alt="loading..."
                      className="profile-dp-image"
                    />
                  </div>
                </div>
                <div
                  className="profilepage-profile-content-edit"
                  onClick={() => setEditUserModal(true)}
                >
                  Edit profile
                </div>
              </div>
              <div className="profilepage-profile-content-name-username">
                <div className="profilepage-profile-content-name">
                  {clickedUser()?.firstName || ""}{" "}
                  {clickedUser()?.lastName || ""}
                </div>
                <div className="profilepage-profile-content-username">
                  @{clickedUser()?.username}
                </div>
              </div>
              <div className="profilepage-profile-content-bio">
                {clickedUser()?.bio}
              </div>
              <div className="profilepage-profile-content-website">
                <Link to={clickedUser()?.website}>
                  {clickedUser()?.website}
                </Link>
              </div>
              <div className="profilepage-profile-content-follow">
                <div className="profilepage-profile-content-followers">
                  <div>{clickedUser()?.followers.length || 0}</div>
                  <div className="follow-word">followers</div>
                </div>
                <div className="profilepage-profile-content-following">
                  <div>{clickedUser()?.following.length || 0} </div>
                  <div className="follow-word"> following</div>
                </div>
              </div>
            </div>
          </div>

          {editUserModal && (
            <div
              onClick={() => setEditUserModal(false)}
              className="userprofile_modal_outer_div"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="userprofile_modal_outer_container"
              >
                <EditUser />
              </div>
            </div>
          )}
          {/* <div className="profilepage-profile-navbar"> </div> */}
          <div className="profilepage-profile-tweets">
            <PostsLayout data={clickedUserPosts} />
          </div>
        </div>
      </div>
      <RightSideLayout />
    </div>
  );
};
