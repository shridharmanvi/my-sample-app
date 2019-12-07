import * as types from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(posts => {
      dispatch({
        type: types.FETCH_POSTS,
        payload: posts
      });
    });
};
