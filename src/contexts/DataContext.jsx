import React, { createContext, useEffect, useReducer, useState } from "react";
import { DataReducer, initialData } from "../reducers/DataReducer";
// import { getPosts, getUsers } from "../services/fetchAPI";
import { DATAACTIONS } from "../services/actions";
import { getPosts, getUsers } from "../services/APIservices/DataCalls/dataCall";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, initialData);
  const [user, setUser] = useState(dataState.loggedInUser);
  const [avatar, setAvatar] = useState(false);
  const [newPost, setNewPost] = useState({
    content: "",
    postImage: "",
  });

  const [editModal, setEditModal] = useState({
    modalState: false,
    postId: "",
  });

  const [editUserModal, setEditUserModal] = useState(false);

  const getAllPosts = async () => {
    const postResponse = await getPosts();
    if (postResponse.status === 200) {
      dataDispatch({
        type: DATAACTIONS.SETPOSTS,
        payload: postResponse.data.posts,
      });
    }
  };

  //   console.log("sduhaiusdfhg");
  const getAllUsers = async () => {
    const userReponse = await getUsers();
    if (userReponse.status === 200) {
      dataDispatch({
        type: DATAACTIONS.SETUSERS,
        payload: userReponse.data.users,
      });
    }
  };

  // const getAllBookmarks = async () => {
  //   const postResponse = await getAllBookmarks();
  //   if (postResponse.status === 200) {
  //     dataDispatch({
  //       type: DATAACTIONS.SETBOOKMARKS,
  //       payload: postResponse.data.bookmarks,
  //     });
  //     console.log(postResponse.data.bookmarks);
  //   }
  // };
  useEffect(() => {
    getAllPosts();
    getAllUsers();
    // getAllBookmarks();
  }, []);

  const values = {
    dataState,
    dataDispatch,
    newPost,
    setNewPost,
    editUserModal,
    setEditUserModal,
    editModal,
    setEditModal,
    user,
    setUser,
    avatar,
    setAvatar,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};
