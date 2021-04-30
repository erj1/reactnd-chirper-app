import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleAddTweet } from "../actions/tweets";


class NewTweet extends Component {

  maxlength = 280

  state = {
    text: ''
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({
      text
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;
    dispatch(handleAddTweet(text, id));
    this.setState(() => ({
      text: ''
    }));
  }

  render() {
    const { text } = this.state;
    const textRemaining = this.maxlength - text.length;
    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            className="textarea"
            value={text}
            onChange={this.handleChange}
            placeholder="What's Happening?"
            maxLength={this.maxlength}
          />
          { textRemaining <= 100 && (
            <div className="tweet-length">{textRemaining}</div>
          )}
          <button
            className="btn"
            type="submit"
            disabled={text === ''}
          >Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);