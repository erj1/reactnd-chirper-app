import React, { Component } from "react";
import { connect } from 'react-redux';
import { formatTweet } from "../utils/helpers";

class Tweet extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='tweet'>
        {this.props.tweet.text}
      </div>
    );
  }
}

function mapStateToProps({authedUser, tweets, users}, {id}) {
  const tweet = tweets[id];

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser, tweets[tweet.replyingTo])
  }
}

export default connect(mapStateToProps)(Tweet);
