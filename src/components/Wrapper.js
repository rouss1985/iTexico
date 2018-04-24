import React, { Component } from 'react';
import Coupons from './Coupons'
import Partners from './Partners'
import { BrowserRouter } from "react-router-dom";
import Filter from './Filter'
import Hero from './Hero'
import { Container, Row, Col } from 'reactstrap';


class Wrapper extends Component {
    constructor(){
        super()
        this.state = {
            originalCoupons: [],
            coupons: [],
            partners: [],
        }
        this.sortCoupon = this.sortCoupon.bind(this)
        this.filter = this.filter.bind(this)
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

    filter(category){
        let filterCoupons = []
        if(category === 'all'){
            this.setState({coupons: this.state.originalCoupons})
        }
        else {
            this.state.originalCoupons.forEach((element)=>{
                if(element.account.category === category){
                    filterCoupons.push(element)
                }
            })
            this.setState({coupons: filterCoupons})
        }
    }

    fetchCoupons(){
        fetch('https://freetime-laboratoria.herokuapp.com/api/Coupons/allByCategory')
        .then((response) => {
        return response.json()
        })
        .then((response) => {
            this.setState({coupons: response.coupons})
            this.setState({originalCoupons: response.coupons})
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
                <Hero/>
                <Filter filter={this.filter}/>
              <Col sm={{ size: 9, offset: 3 }}>
                <Coupons sortCoupon={this.sortCoupon} coupons={this.state.coupons}/>
              </Col>
              <Col sm={{ size: 9, offset: 3 }}>
                <Partners partners={this.state.partners}/>
              </Col>


            </div>
        )
    }
}

export default Wrapper;
