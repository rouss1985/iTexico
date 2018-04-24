import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Filter.css';
export default class Filter extends React.Component {
    render() {
        return (
        <div className="Cont">
            <p><strong className="Categories">Categories</strong></p>
            <Nav vertical>
            <NavItem>
                <NavLink className="Menu"onClick={()=>{this.props.filter('all')}} href="#">All Categories</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="Menu"onClick={()=>{this.props.filter('Outdoors Sports')}} href="#">Outdoor Activities</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="Menu"onClick={()=>{this.props.filter('Extreme Sports')}} href="#">Extreme Sports</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="Menu"onClick={()=>{this.props.filter('Climbing')}}   href="#">Mountain Climbing</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="Menu"onClick={()=>{this.props.filter('Water Sports')}} href="#">Water Sports</NavLink>
            </NavItem>
            </Nav>
        </div>
        )
    }
}
