import React, { Component } from 'react';
import Header from './components/Header';
import Hero from'./components/Hero';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Maps from './components/Map';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Hero />

        <Container>
        <Wrapper />
        </Container>
        <Footer />
        <Maps />

      </div>
    );
  }
}

export default App;
