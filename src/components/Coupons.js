import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class Coupons extends Component {
    render() {
        return (
            <Container>
                <Row>
                {this.props.coupons.map((el)=>{
                    return(
                        <Col xs="6" sm="4">
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
        )
    }
}

export default Coupons;