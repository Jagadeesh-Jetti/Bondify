export const isPostBookmarked = (postId, dataState) => {
  return dataState.bookmarks.find((item) => item._id === postId);
};
