import React, {Component} from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";


class SinglePartner extends Component {
    constructor(){
        super()
        this.state = {
            partnerDetails: {},
            partnerCoupons: []
        }
    }
    componentDidMount(){
        this.fetchPartner()
        this.fetchCoupons()
    }

    fetchPartner(){
        fetch('https://freetime-laboratoria.herokuapp.com/api/Accounts/' + this.props.id + '?access_token=YSfVKckQ68aaHfmMlfZplkNG5YbPaKTFsPFZ1kNtRkiZzfnBu8vPLFOCjRiYYTv1')
        .then((response) => {
            return response.json()
            })
            .then((response) => {
                this.setState({partnerDetails: response}, ()=>{console.log(this.state)})
            })
    }

    fetchCoupons(){
        fetch('https://freetime-laboratoria.herokuapp.com/api/Accounts/' + '5ada3329cd0ff700148aa9e5' + '/coupons?access_token=YSfVKckQ68aaHfmMlfZplkNG5YbPaKTFsPFZ1kNtRkiZzfnBu8vPLFOCjRiYYTv1')
        .then((response) => {
            return response.json()
        }).then((response)=> {
            this.setState({partnerCoupons: response},()=>{console.log(this.state.partnerCoupons)})
        }) 
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <div>
                    <img src={this.state.partnerDetails.media_urls}/>
                    <p>{this.state.partnerDetails.name}</p>
                    <p>{this.state.partnerDetails.category}</p>
                    <p>{this.state.partnerDetails.summary}</p>
                </div>

                <div> 
                    {this.state.partnerCoupons.map((el, index) => {
                        return (
                            <Col xs="6" sm="4" key={index}>
                            <Card>
                            <Link to={"/cupon/" + el.id} >
                                    <CardImg src={el.media_urls[0]} alt={el.title} />
                                    <CardBody>
                                        <CardTitle>{el.title}</CardTitle>
                                        
                                        <CardText>{el.details.slice(0,20)}</CardText>
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
                </div>

            </div>
        )
    }
}


export default SinglePartner;

