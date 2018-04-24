import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Coupons.css'

class Coupons extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="4">
                    <h3 className="titleCupones">Offers of the week</h3>
                    </Col>
                    <Col sm="12" md={{ size: 8, offset: 6 }}>
                    <select className="sel" onChange={(event)=>{this.props.sortCoupon(event)}}>
                            <option>Selecciona una opción</option>
                            <option value="mostExpensive">Mayor precio</option>
                            <option value="lessExpensive">Menor precio</option>
                            <option value="aToZ">A-Z</option>
                            <option value="ZToA">Z-A</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                {this.props.coupons.map((el)=>{
                    return(
                        <Col xs="12" sm="4">
                            <Card className="cuponCard">
                                <CardImg  className="imageCupon" src={el.media_urls[0]} alt={el.title} />
                                <CardBody className="CarB">
                                    <CardTitle className="titleCuponn">{el.title}</CardTitle>
                                    <CardSubtitle className="nameCount">{el.account.name}</CardSubtitle>
                                    <CardText className="cuponDetails">{el.details.slice(0,20)}</CardText>
                                    <CardText className="local">{el.location}</CardText>
                                    <CardText className="price">Precio:$ {el.price}</CardText>
                                    <CardText className="desc">Descuento:$ {el.discount_price}</CardText>
                                    <CardText className="disp">Cupones disponibles:{el.available_coupons}</CardText>
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
