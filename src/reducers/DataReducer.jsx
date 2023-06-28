import { DATAACTIONS } from "../services/actions";

export const initialData = {
  posts: [],
  users: [],
  bookmarks: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case DATAACTIONS.SETPOSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case DATAACTIONS.SETUSERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case DATAACTIONS.SETBOOKMARKS: {
      return {
        ...state,
        bookmarks: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
