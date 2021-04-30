import React, { Component } from "react";
import { connect } from 'react-redux';
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";


class TweetPage extends Component {
  render() {
    const { id, replies } = this.props
    return (
      <div>
        <Tweet id={id} />
        <NewTweet id={id} />
        {replies.length !== 0 && (
          <div className="center"><h3>Replies</h3></div>
        )}

        <ul>
          {replies.map(replyId => (
            <li key={replyId}>
              <Tweet id={replyId} />
            </li>
          ))}
        </ul>

      </div>
    )
  }
}


function mapStateToProps({ authedUser, tweets, users }, ownProps) {
  const id = ownProps.match.params.id;

  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(TweetPage);
