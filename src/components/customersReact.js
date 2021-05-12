import React, { Component } from "react";
import './comp.css';
import{
  Link
} from "react-router-dom";

class CustomersReact extends Component {
  constructor(props) {
    super(props);
    this.state ={
      customers: [],
      custOrders: []
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:5000/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers: customers}, () => console.log(this.state.customers)));
  }
  getOrders(id){
    this.setState({custOrders: []})
    fetch(`http://localhost:5000/orders/${id}`)
    .then(res => res.json())
    .then(data => console.log(data));
  }
  
  //removes the customer from the customer collection
  deleteCust(id){
    fetch(`http://localhost:5000/customers/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => alert("Successfully deleted"));
  }
  //removes all orders for the specified customer
  deleteOrders(id){
    fetch(`http://localhost:5000/orders/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => alert("Successfully deleted"));
  }
  render() {
    return (
      <div className="underNav">
        <Link to="/newCust"><button className="buttonStyle">Create New Customer</button></Link>
        <Link to="/newCust"><button className="buttonStyle">Update Customer Details</button></Link>
        {this.state.custFullDetails && console.log(this.state.custFullDetails)}
        {this.state.custorders && console.log(this.state.custorders)}
        {this.state.customers.map((c) =>(
          <p key={c._id}>
            <h3>{c.Title} {c.Firstname} {c.Surname}</h3>
            <div>E: {c.EmailAddress}, M: {c.MobileNumber} </div>
            <div>Address: {c.HomeAddress.AddressLine1}, {c.HomeAddress.AddressLine2}, {c.HomeAddress.Town}, {c.HomeAddress.CityOrCounty}, {c.HomeAddress.Eircode}</div>
            {c.HomeAddress.Eircode !== c.ShippingAddress.Eircode && <div>Shipping Address (if different): {c.ShippingAddress.AddressLine1}, {c.ShippingAddress.AddressLine2}, {c.ShippingAddress.Town}, {c.ShippingAddress.CityOrCounty}, {c.ShippingAddress.Eircode}</div>}
            <div>
              <button className="buttonStyle" onClick={() => this.getOrders(c._id)}>See All Orders</button>
              <button className="buttonStyle" onClick={() => this.deleteCust(c._id)}>Delete Customer Account</button>
              <button className="buttonStyle" onClick={() => this.deleteOrders(c._id)}>Delete All Orders</button>
            </div>
          </p>
        ))}
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default CustomersReact;