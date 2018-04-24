import React, {Component} from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import './SinglePartner.css';
import Dropdown from './Dropdown';


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
        return(
            <div>
              <Row className = "rectanglePart">
                  <Col className= "description" sm="12" md={{ size: 3, offset: 1 }}>
                    <img className = "imgPartner" src={this.state.partnerDetails.media_urls}/>
                  </Col>

                  <Col className= "description" sm="12" md={{ size: 4, offset: 1 }}>
                    <p className ="namePart">{this.state.partnerDetails.name}</p>
                    <p className = "category">{this.state.partnerDetails.category}</p>
                    <p className = "sumaryPart" >{this.state.partnerDetails.summary}</p>
                  </Col>
               </Row>

               <Row>
                  <Col className= "description" sm="12" md={{ size: 3, offset: 1 }}>
                   <h1 className = "Title">
                     Our Deals
                   </h1>
                  </Col>

                  <Col sm="12" md={{ size: 3, offset: 4 }} className="most-recent">
                   <Dropdown className="most-recent" />
                  </Col>
                </Row>


                <Row>

                    {this.state.partnerCoupons.map((el, index) => {
                        return (
                            <Col sm="12" md={{ size: 3, offset: 1 }}lassName="cardDeals" key={index}>
                            <Card className="card">
                            <Link to={"/cupon/" + el.id} >
                                    <CardImg className="card-image" src={el.media_urls[0]} alt={el.title} />
                                    <CardBody>
                                        <CardTitle className="card-title" >{el.title}</CardTitle>

                                        <CardText className="card-details" >{el.details.slice(0,20)}</CardText>
                                        <CardText className="card-location" >{el.location}</CardText>
                                        <Row className="card-cost">
                                          <CardText className="card-price" >$ {el.price}</CardText>
                                          <CardText className="card-discount" >$ {el.discount_price}</CardText>
                                        </Row>
                                        <CardText>Cupones disponibles:{el.available_coupons}</CardText>
                                    </CardBody>
                                </Link>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>

            </div>

        )
    }
}


export default SinglePartner;
