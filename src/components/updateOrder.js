import React, { Component } from "react";


class UpdateOrder extends Component {
  constructor(props) {
    super(props);
    this.state ={
        orders:[],
        items:[],
        order:"",
        phone: ""
    }
  }

  handleOrder = (e) => {
    this.setState({order: e.target.value})
  }
  handlePhone = (e) => {
    this.setState({phone: e.target.value})
  }
  componentDidMount = () => {
    fetch('http://localhost:5000/orders')
    .then(res => res.json())
    .then(orders => this.setState({orders: orders}));
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(items => this.setState({items: items}));
  }
  updateOrder = (e) =>{
    e.preventDefault();
    const options ={
      method: 'PATCH',
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone: this.state.phone})
    }
  fetch(`http://localhost:5000/orders/${this.state.order}`, options)
  .then(res => res.json())
  .then(data => alert("Successfully updated", data));
}
  render() {
    return (
        <div className="underNav">
        <h3>Update an existing Order</h3>
        <p>To update an order, please select an order from the order list and a phone from the items list</p>
        <label name="Order"><b>Order:</b></label>
        <select value ={this.state.order} onChange={this.handleOrder}>
        <option>Please select</option>
            {this.state.orders.map((c) => (
            <option key={c._id} value={c._id} >
            {c._id} {c.Firstname} {c.Surname}
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
        <button onClick={this.updateOrder}>Update Order</button>
        {this.state.order && console.log(this.state.order)}
        {this.state.phone && console.log(this.state.phone)}
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default UpdateOrder;