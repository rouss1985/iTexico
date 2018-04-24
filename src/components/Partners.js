import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Partners.css'



class Partners extends Component {
    render() {
        console.log('props',this.props)
        return (
            <Container className="contain">
                <h1 className="title2">Our partners</h1>
                <Row>
                {this.props.partners.map((el, index)=>{
                if(index < 3){
                    return(
                        <Col xs="12" sm="4">
                            <Card className="card2">
                                <CardImg className="imgCard2" src={el.media_urls[0]} alt={el.name} />
                                <CardBody className="bodyCard2">
                                <CardTitle className="nameCard2">{el.name}</CardTitle>
                                <CardSubtitle className="sudCard2">{el.category}</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
            })}
                </Row>
            </Container>
        )
    }
}

export default Partners;
