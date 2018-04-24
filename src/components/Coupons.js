import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import Filter from './Filter';



class Coupons extends Component {
    render() {
        return (
          <div>
            <Container>
              <Row>

                <Col xs="6" sm="3">
                <Filter />
                </Col>
                {this.props.coupons.map((el)=>{
                    return(
                        <Col xs="6" sm="3">
                            <Card>
                                <CardImg src={el.media_urls[0]} alt={el.title} />
                                <CardBody>
                                <CardTitle>{el.title}</CardTitle>
                                <CardSubtitle>{el.account.name}</CardSubtitle>
                                <CardText>{el.details.slice(0,20)}</CardText>
                                <CardText>{el.location}</CardText>
                                <CardText>{el.price}</CardText>
                                <CardText>{el.discount_price}</CardText>
                                <CardText>{el.available_coupons}</CardText>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>


                    )
                })}

                </Row>



            </Container>
          </div>

        )
    }
}

export default Coupons;
