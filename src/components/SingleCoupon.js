import React, { Component } from 'react';
import Modal from 'react-modal';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './SingleCoupon.css'
import Mapa from './Map'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class SingleCoupon extends Component {
    constructor(){
        super();
        this.state = {
            couponDetails: {},
            modalIsOpen: false,
            disability: false
        }

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.ableButton = this.ableButton.bind(this);
    this.setReservation = this.setReservation.bind(this)
    this.sendReservation = this.sendReservation.bind(this)
    }

    ableButton(){
        if(this.state.couponDetails.available_coupons === 0){
            this.setState({disability: true})

            } else {
                this.setState({disability: false})
            }
        }


    openModal() {
        this.setState({modalIsOpen: true});
    }

    sendReservation(name, email, phone){
        let body = {
            "name": name,
            "email": email,
            "number": phone,
            "couponId": this.state.couponDetails.id
        }
        console.log(body)
        let url = 'https://freetime-laboratoria.herokuapp.com/api/Reservations?access_token=YSfVKckQ68aaHfmMlfZplkNG5YbPaKTFsPFZ1kNtRkiZzfnBu8vPLFOCjRiYYTv1'
        fetch(url,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
    }

    setReservation(event){
        let name = event.target.previousSibling.previousSibling.previousSibling.children[1].value;
        let email = event.target.previousSibling.previousSibling.children[1].value;
        let phone = event.target.previousSibling.children[1].value
        this.sendReservation(name, email, phone)
    }

    closeModal() {
        this.setState({modalIsOpen: false});
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

                      <Button onClick={this.openModal} className="btnn">Reservation</Button>
                      
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
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                 <button onClick={this.closeModal}>x</button>
                <h2>Reservar este cupón</h2>
                <h3>{this.state.couponDetails.title}</h3>
                <p><span>Precio: ${this.state.couponDetails.price} </span><span>Descuento: ${this.state.couponDetails.discount_price}</span></p>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input />
                    </FormGroup>
                    <Button onClick={(event)=>{this.setReservation(event)}}color="primary" disabled={this.state.disability}>Reservar este cupón</Button>
                </Form>


                </Modal>
                </Container>
            </div>)
    }
}

export default SingleCoupon;
