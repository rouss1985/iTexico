import React, { Component } from 'react';
import Coupons from './Coupons';
import Partners from './Partners';


class Wrapper extends Component {
    constructor(){
        super()
        this.state = {
            coupons: [],
            partners: []

        }
    }

    fetchCoupons(){
        fetch('https://freetime-laboratoria.herokuapp.com/api/Coupons/allByCategory')
        .then((response) => {
        return response.json()
        })
        .then((response) => {
            this.setState({coupons: response.coupons}, ()=>{console.log(this.state)})
        })
    }

    fetchPartners(){
        fetch('https://freetime-laboratoria.herokuapp.com/api/Accounts?access_token=YSfVKckQ68aaHfmMlfZplkNG5YbPaKTFsPFZ1kNtRkiZzfnBu8vPLFOCjRiYYTv1')
        .then((response) => {
        return response.json()
        })
        .then((response) => {
            let shuffled = response
                .map((a) => ({sort: Math.random(), value: a}))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value)
            this.setState({partners: shuffled})

        })
    }

    componentDidMount(){
        this.fetchCoupons()
        this.fetchPartners()
    }


    render() {
        return (
            <div>

                <Coupons coupons={this.state.coupons}/>
                <Partners partners={this.state.partners}/>

            </div>
        )
    }
}

export default Wrapper;
