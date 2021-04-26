import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authUser";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";

const AUTHED_USER_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AUTHED_USER_ID));
      });
  };
}
