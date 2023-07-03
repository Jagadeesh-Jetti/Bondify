export const Filtering = (dataState) => {
  let filteredData = dataState?.posts ?? [];

  filteredData = filteredData.filter(
    (post) =>
      post.username === dataState.loggedInUser.username ||
      dataState.loggedInUser?.following?.some(
        (item) => item.username === post.username
      )
  );

  if (dataState?.sortType === "latest") {
    filteredData = filteredData.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  if (dataState?.sortType === "older") {
    filteredData = filteredData.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  if (dataState?.sortType === "trending") {
    filteredData = filteredData.sort(
      (a, b) => b.likes.likeCount - a.likes.likeCount
    );
  }

  return filteredData;
};
