import React, { Component } from "react";
import './newOrder.css';

class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state ={
        customers:[],
        items:[],
        customer:"",
        phone: ""
    }
    this.setCustState = this.setCustState.bind(this);
  }

  setCustState = (id) => {
    this.setState({customer: id})
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
  .then(data => console.log(data))
  .catch(err => console.log(err)); 
  }
  render() {
    return (
        <div className="underNav">
        
        <label name="Customer"><b>Customer:</b></label>
        {this.state.customers.map((c) => (
            <option key={c._id} onClick={()=>this.setCustState(c._id)}>
            {c.Firstname} {c.Surname}
                </option> ))}                   
        <label  name="Item"><b>Item:</b> </label> 
        {this.state.items.map((i) => (
            <option  key={i._id} onClick={()=> this.setState({phone: i._id})}>
            {i.Manufacturer} {i.Model}
                </option> ))}  
        <button onClick={this.postOrder}>Submit</button>
        {this.state.customer && console.log(this.state.customer)}
        {this.state.phone.length > 0 && console.log(this.state.phone)}
      
      
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default NewOrder;