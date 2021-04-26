import { RECEIVE_TWEETS } from "../actions/tweets";

export default function tweets (state={}, action) {
  switch(action.type) {

    case RECEIVE_TWEETS:
      return {
        ...state,
        ...state.tweets
      }

    default:
      return state
  }
}
