import { DATAACTIONS } from "../services/actions";

export const initialData = {
  posts: [],
  users: [],
  bookmarks: [],
  sortType: "",
  loggedInUser: {},
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
    case DATAACTIONS.SETSORTTYPE: {
      return {
        ...state,
        sortType: action.payload,
      };
    }
    case DATAACTIONS.SETLOGGEDINUSER: {
      return {
        ...state,
        loggedInUser: action.payload,
      };
    }
    case DATAACTIONS.SETAVATAR: {
      return {
        ...state,
        loggedInUser: { ...state.loggedInUser, avatarUrl: action.payload },
      };
    }
    default: {
      return state;
    }
  }
};
