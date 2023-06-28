import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get("/api/posts");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get("/api/users");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get("/api/posts/user/:username");
  } catch (error) {
    console.error(error);
  }
};
