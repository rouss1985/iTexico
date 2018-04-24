import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css'


class Footer extends React.Component {
  render () {
    return (
      <div>
        <Container>
          <Row className="divfoo">
              <Col sm="12" className="text">FreeTime 2018</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;
