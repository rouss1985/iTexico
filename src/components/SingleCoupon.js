import React, { Component } from 'react';

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

        return(<div>
            <p>{this.state.couponDetails.title}</p>
            {/* <p>{this.state.account.name}</p> */}
            <p>Precio: {this.state.couponDetails.price}</p>
            <p>Descuento: {this.state.couponDetails.discount_price}</p>
                <img src={this.state.couponDetails.media_urls}></img>
                <p>{this.state.couponDetails.details}</p>
                <p>Cupones disponibles: {this.state.couponDetails.available_coupons}</p>
            </div>)
            <Button color="primary">Reservation</Button>
    }


}

export default SingleCoupon;
