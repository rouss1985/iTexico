import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import './Coupons.css';

class Coupons extends Component {
    render() {
        console.log(this.props.coupons)
        return (
            <Container>
                <Row>
                  // <Col sm="3" className="most-recent"><span>Offers of the week</span></Col>
                  // <Col  sm={{ size: 2,  offset: 8 }}>

                  <select className= "sel" onChange={(event)=>{this.props.sortCoupon(event)}}>
                          <option>Selecciona una opción</option>
                          <option value="mostExpensive">Mayor precio</option>
                          <option value="lessExpensive">Menor precio</option>
                          <option value="aToZ">A-Z</option>
                          <option value="ZToA">Z-A</option>
                      </select>
                  // </Col>
                </Row>
                <Row>
                {this.props.coupons.map((el, index)=>{
                    return(
                        <Col xs="6" sm="4" key={index}>
                            <Card>
                            <Link to={"/cupon/" + el.id} >
                                    <CardImg src={el.media_urls} alt={el.title} />
                                    <CardBody>
                                        <CardTitle>{el.title}</CardTitle>
                                        {/* <CardSubtitle>{el.account.name}</CardSubtitle> */}
                                        <CardText>{el.details}</CardText>
                                        <CardText>{el.location}</CardText>
                                        <CardText>Precio: {el.price}</CardText>
                                        <CardText>Descuento: {el.discount_price}</CardText>
                                        <CardText>{el.available_coupons}</CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Link>
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
