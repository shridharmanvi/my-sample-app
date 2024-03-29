import { FETCH_POSTS } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("called reducer");
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
