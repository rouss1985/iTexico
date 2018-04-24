import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class Coupons extends Component {
    render() {
        return (
            <Container>
                <Row>
                <select onChange={(event)=>{this.props.sortCoupon(event)}}>
                        <option>Selecciona una opción</option>
                        <option value="mostExpensive">Mayor precio</option>
                        <option value="lessExpensive">Menor precio</option>
                        <option value="aToZ">A-Z</option>
                        <option value="ZToA">Z-A</option>
                    </select>
                </Row>
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
                                    <CardText>Precio: {el.price}</CardText>
                                    <CardText>Descuento: {el.discount_price}</CardText>
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