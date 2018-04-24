import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Filter extends React.Component {
  render() {
    console.log(this.props,'filter');
    return (

      <div>
        <p><strong>Categories</strong></p>
        <Nav vertical>
          <NavItem>
            <NavLink >All Categories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Outdoor Activities</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Extreme Sports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="#">Mountain Climbing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Water Sports</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
