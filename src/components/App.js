import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <LoadingBar/>
        <BrowserRouter>
          <div className='container'>
            <Nav/>
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/new' component={NewTweet}/>
                <Route path='/tweet/:id' component={TweetPage}/>
              </div>
            }
          </div>
        </BrowserRouter>
      </Fragment>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
