import React, { Component } from "react";
import './comp.css';

class OrdersReact extends Component {
  constructor(props) {
    super(props);
    this.state ={
        orders: []
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:5000/orders')
    .then(res => res.json())
    .then(orders => this.setState({orders: orders}, () => console.log(this.state.orders)));
  }
  updateOrder(id){
    console.log(id);
  }
  deleteOrder(id){
    fetch(`http://localhost:5000/orders/orderNum/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => alert("Successfully deleted"));
  }
  render() {
    return (
        <div className="underNav">
        {this.state.orders.map((c) =>(
          <p key={c._id}>
            <h3>{c._id}</h3>
            <div>{c.Customer.Firstname} {c.Customer.Surname}</div>
            <div>{c.ItemsOrdered[0].phone.Manufacturer} {c.ItemsOrdered[0].phone.Model} {c.ItemsOrdered[0].phone.Price}</div>
            <div>
              <button className="buttonStyle" onClick={() => this.updateOrder(c._id)}>Update Order</button>
              <button className="buttonStyle" onClick={() => this.deleteOrder(c._id)}>Delete Order</button>
            </div>
          </p>
        ))}
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default OrdersReact;