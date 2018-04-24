import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css'


class Footer extends React.Component {
  render () {
    return (
      <div>
          <Row className="divfoo">
            <Container>
              <Col sm="12" className="text">FreeTime 2018</Col>
            </Container>
          </Row>
      </div>
    )
  }
}

export default Footer;
