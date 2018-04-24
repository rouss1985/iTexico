import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from "react-router-dom";
import SingleCoupon from './components/SingleCoupon'
import SinglePartner from './components/SinglePartner'
import Wrapper from './components/Wrapper';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Wrapper} />
          <Route
          render={({match})=>
            <SingleCoupon
              id={match.params.id}
              />
            }
            path="/cupon/:id" />
          <Route
          render={({match})=>
            <SinglePartner
              id={match.params.id}
              />
            }
            path="/partner/:id" />
        </Switch>
        <Footer />


      </div>
    );
  }
}

export default App;
