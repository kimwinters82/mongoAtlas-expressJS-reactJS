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
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default Nav;