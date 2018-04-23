import React from 'react';
import { Container, Row, Col } from 'reactstrap';

  const Header = () => (
    <div>
      <Container>
          <Row>
            <Col sm="1">FreeTime</Col>
            <Col sm={{ size: 2, offset: 9 }}>Submit a Cupon</Col>
          </Row>
        </Container>
      </div>
);

export default Header;
