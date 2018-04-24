import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './SingleCoupon.css'
import Mapa from './Map'

class SingleCoupon extends Component {
    constructor(){
        super();
        this.state = {
            couponDetails: {}
        }
    }

    componentDidMount(){
        this.fetchCoupon()
    }

    fetchCoupon(){
        fetch('https://freetime-laboratoria.herokuapp.com/api/Coupons/' + this.props.id +'?access_token=YSfVKckQ68aaHfmMlfZplkNG5YbPaKTFsPFZ1kNtRkiZzfnBu8vPLFOCjRiYYTv1')
        .then((response) => {
        return response.json()
        })
        .then((response) => {
            this.setState({couponDetails: response})
            fetch('https://freetime-laboratoria.herokuapp.com/api/Accounts/'+ response.accountId +'?access_token=YSfVKckQ68aaHfmMlfZplkNG5YbPaKTFsPFZ1kNtRkiZzfnBu8vPLFOCjRiYYTv1')
            .then((response) => {
                return response.json()
                })
            .then((response) => {
                this.setState({account: response}, ()=>{console.log(response.name, 'response')})
            }
        )})
    }

    render(){

        return(
            <div className="contGral">
                <Container>
                <Row>
                    <Col sm="5">
                      <p className="titleC">{this.state.couponDetails.title}</p>
                      <img className="imgCu" src={this.state.couponDetails.media_urls}></img>
                    </Col>

                    <Col sm="4" sm={{ size: 5, offset: 2 }}>
                      <p className="titleCo">{this.state.couponDetails.title}</p>
                      <p className="cPrice">Precio: {this.state.couponDetails.price}</p>
                      <p className="cDesc">Descuento: {this.state.couponDetails.discount_price}</p>
                      <p className="cDisp">Cupones disponibles: {this.state.couponDetails.available_coupons}</p>
                      <button className="btnn">Reserve this coupon</button>
                      <p className="parraf">
                        *We will send you Code you reserve your coupon.You
                        have 48 Hours to present your coupon in the location listed.
                      </p>
                    </Col>
                </Row>
                <Row>
                  <h4 className="det">Details</h4>
                  <p className="detC">{this.state.couponDetails.details}</p>
                </Row>
                <Row>
                  <h4 className="loc">Location</h4>
                  <div>
                    <Mapa />
                  </div>
                </Row>
                </Container>
            </div>)
    }
}

export default SingleCoupon;
