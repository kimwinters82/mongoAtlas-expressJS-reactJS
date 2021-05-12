import React, { Component } from "react";

class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state ={
        customers:[],
        items:[],
        customer:"",
        phone: ""
    }
  }

  handleCust = (e) => {
    this.setState({customer: e.target.value})
  }
  handlePhone = (e) => {
    this.setState({phone: e.target.value})
  }
  componentDidMount = () => {
    fetch('http://localhost:5000/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers: customers}));
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(items => this.setState({items: items}));
  }
  postOrder = (e) => {
      e.preventDefault();
      const options ={
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({phone: this.state.phone})
        }  
  fetch(`http://localhost:5000/orders/${this.state.customer}`, options)
  .then(res=> res.json())
  .then(data => alert("Successfully created new order", data))
  .catch(err => console.log(err)); 
  }
  render() {
    return (
        <div className="underNav">
        <h3>Create a new Order</h3>
        <p>To create an order, please select a customer from the customer list and a phone from the items list</p>
        <label name="Customer"><b>Customer:</b></label>
        <select value ={this.state.customer} onChange={this.handleCust}>
          <option>Please select</option>
            {this.state.customers.map((c) => (
            <option key={c._id} value={c._id} >
            {c.Firstname} {c.Surname}
            </option> ))}      
        </select>             
        <label  name="Item"><b>Item:</b> </label> 
        <select value ={this.state.phone} onChange={this.handlePhone}>
        <option>Please select</option>
          {this.state.items.map((i) => (
            <option  key={i._id} value={i._id} >
            {i.Manufacturer} {i.Model}
            </option> ))}  
        </select>
        <button className="buttonStyle" onClick={this.postOrder}>Create New Order</button>
        {this.state.customer && console.log(this.state.customer)}
        {this.state.phone && console.log(this.state.phone)}
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default NewOrder;