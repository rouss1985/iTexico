import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button } from 'reactstrap';



class Partners extends Component {
    render() {
        console.log('props',this.props)
        return (
            <Container>
                <h1>Our partners</h1>
                <Row>
                {this.props.partners.map((el, index)=>{
                if(index < 3){
                    return(
                        <Col xs="6" sm="4">
                            <Card>
                                <CardImg src={el.media_urls[0]} alt={el.name} />
                                <CardBody>
                                <CardTitle>{el.name}</CardTitle>
                                <CardSubtitle>{el.category}</CardSubtitle>
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


