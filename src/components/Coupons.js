import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import './Coupons.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Coupons extends Component {
    render() {
        console.log(this.props.coupons)
        return (
            <Container>
                <Row className="Title">
                  <Col sm="4" className="most-recent"><span>Offers of the week</span></Col>
                  <Col  sm={{ size: 2,  offset: 5 }}>

                  <select className= "sel" onChange={(event)=>{this.props.sortCoupon(event)}}>
                          <option>Select an option</option>
                          <option value="mostExpensive">Higher price</option>
                          <option value="lessExpensive">Lower price</option>
                          <option value="aToZ">A-Z</option>
                          <option value="ZToA">Z-A</option>
                      </select>
                  </Col>
                </Row>
                <Row>
                {this.props.coupons.map((el, index)=>{
                  if(el.account && index<12){
                    return(
                        <Col xs="12"  sm="4" key={index}>
                            <Card>
                            <Link to={"/cupon/" + el.id} >
                                    <CardImg src={el.media_urls} alt={el.title} className="card-image"/>
                                    <CardBody>
                                        <CardTitle className="card-title">{el.title}</CardTitle>
                                        <CardSubtitle>{el.account.name}</CardSubtitle>
                                        <CardText className="card-details">{el.details.slice(0,20)}</CardText>
                                        <CardText className="card-location">{el.location}</CardText>
                                        <Row className="card-cost">
                                        <CardText className="card-price">${el.price}</CardText>
                                        <CardText className="card-discount">$ {el.discount_price}</CardText>
                                        </Row>
                                        <CardText>{el.available_coupons} Coupons Availables</CardText>
                                    </CardBody>
                                </Link>
                            </Card>
                        </Col>

                    )
                  }
                })}
                </Row>
                <Row className="paginacion">
                  <Col sm={{ size: 4,  offset: 7 }}>
                  <Pagination size="lg">
                  <PaginationItem>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
                  </Pagination>
                  </Col>
                </Row>
            </Container>

        )
    }
}

export default Coupons;
