import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css'


class Footer extends React.Component {
  render () {
    return (
      <div>
          <Row className="divfoo">
              <Col sm="12" className="text">FreeTime 2018</Col>
          </Row>
      </div>
    )
  }
}

export default Footer;
