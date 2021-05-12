import React, { Component } from "react";
import './comp.css';
import{
  Link
} from "react-router-dom";

class OrdersReact extends Component {
  constructor(props) {
    super(props);
    this.state ={
        orders: [],
        items: [],
        phone: ''
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:5000/orders')
    .then(res => res.json())
    .then(orders => this.setState({orders: orders}, () => console.log(this.state.orders)));
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(items => this.setState({items: items}));
  }
  handlePhone = (e) => {
    this.setState({phone: e.target.value})
  }
  updateOrder = (id) =>{
      const options ={
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone: this.state.phone})
      }
    fetch(`http://localhost:5000/orders/${id}`, options)
    .then(res => res.json())
    .then(data => alert("Successfully updated", data));
  }
  
  deleteOrder(id){
    fetch(`http://localhost:5000/orders/orderNum/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => alert("Successfully deleted", data));
  }
  render() {
    const {phone} = this.state;
    return (
        <div className="underNav">
        <Link to= "/newOrder"><button className="buttonStyle">Create New Order</button></Link>
        <Link to= "/updateOrder"><button className="buttonStyle">Update Order</button></Link>
        {this.state.orders.map((c) =>(
          <p key={c._id}>
            <h3>{c._id}</h3>
            <div>{c.Customer.Firstname} {c.Customer.Surname}</div>
            <div>{c.ItemsOrdered[0].phone.Manufacturer} {c.ItemsOrdered[0].phone.Model} €{c.ItemsOrdered[0].phone.Price}</div>
            <div>
              <button className="buttonStyle" onClick={() => this.deleteOrder(c._id)}>Delete Order</button>
            </div>
          </p>
        ))}
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default OrdersReact;