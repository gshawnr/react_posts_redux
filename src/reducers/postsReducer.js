const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload.data;
    case "ADD_POST":
      console.log("Add post action created");
      break;
    default:
      return posts;
  }
};

export default postsReducer;
