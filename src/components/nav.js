import React, { Component } from "react";
import{
    Link
  } from "react-router-dom";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state ={
        
    }
  }
  
  render() {
    return (
        <div>
        <Link to="/customers"><button className="buttonStyle">Customers collection</button></Link>
        <Link to= "/items"><button className="buttonStyle">Items collection</button></Link>
        <Link to= "/orders"><button className="buttonStyle">Orders collection</button></Link>
        <Link to="/newCust"><button className="buttonStyle">Create New Customer</button></Link>
        <Link to= "/newItem"><button className="buttonStyle">Create New Item</button></Link>
        <Link to= "/newOrder"><button className="buttonStyle">Create New Order</button></Link>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default Nav;