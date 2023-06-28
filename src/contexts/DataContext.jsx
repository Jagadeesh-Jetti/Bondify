import React, { createContext, useEffect, useReducer } from "react";
import { DataReducer, initialData } from "../reducers/DataReducer";
// import { getPosts, getUsers } from "../services/fetchAPI";
import { DATAACTIONS } from "../services/actions";
import { getPosts, getUsers } from "../services/APIservices/DataCalls/dataCall";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, initialData);

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
  useEffect(() => {
    getAllPosts();
    getAllUsers();
  }, []);

  const values = {
    dataState,
    dataDispatch,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};