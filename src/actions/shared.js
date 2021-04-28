import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authUser";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_USER_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {

    dispatch(showLoading());

    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AUTHED_USER_ID));
        dispatch(hideLoading());
      });
  };
}
