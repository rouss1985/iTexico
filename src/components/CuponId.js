import React, { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
            <IndexRedirect to="/posts"/>
        </Route>
        <Route path="/posts" component={List}/>
        <Route path="/posts/create" component={Create}/>
        <Route path="/posts/update/:postId" component={Update}/>
        <Route path="*" component={NotFoundPage}/>
      </Router>
    );
  }
}
