import React, { Component } from 'react';
import Coupons from './Coupons'
import Partners from './Partners'
import Filter from './Filter'

class Wrapper extends Component {
    constructor(){
        super()
        this.state = {
            coupons: [],
            partners: []
        }
        this.sortCoupon = this.sortCoupon.bind(this)
    }

    sortCoupon(event){
        let newCoupons = [];
        switch(event.target.value){
            case 'mostExpensive':
            newCoupons = this.state.coupons.sort((a, b) =>{
                return b.price - a.price})
            this.setState({coupons : newCoupons})
            break;
            case 'lessExpensive':
            newCoupons = this.state.coupons.sort((a, b) =>{
                return a.price - b.price})
            this.setState({coupons : newCoupons})
            break;
            case 'aToZ':
            newCoupons = this.state.coupons.sort((a, b) => a.title.localeCompare(b.title));
            this.setState({coupons : newCoupons})
            break;
            case 'ZToA':
            newCoupons = this.state.coupons.sort((a, b) => b.title.localeCompare(a.title));
            this.setState({coupons : newCoupons})
            break;
            }
        }

    

    fetchCoupons(){
        fetch('https://freetime-laboratoria.herokuapp.com/api/Coupons/allByCategory')
        .then((response) => {
        return response.json()
        })
        .then((response) => {
            this.setState({coupons: response.coupons}, ()=>{console.log(this.state.coupons,'response')})
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
                <Filter />
                <Coupons sortCoupon={this.sortCoupon} coupons={this.state.coupons}/>
                <Partners partners={this.state.partners}/>
            </div>
        )
    }
}

export default Wrapper;

