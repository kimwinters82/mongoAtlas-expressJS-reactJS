import React, { Component } from "react";
import './comp.css';
import{
  Link
} from "react-router-dom";

class ItemsReact extends Component {
  constructor(props) {
    super(props);
    this.state ={
        items: []
    }
  }
  componentDidMount = () => {
      fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(items => this.setState({items: items}, () => console.log(this.state.items)));
  }
  updateItem(id){
    console.log(id);
  }
  deleteItem(id){
    fetch(`http://localhost:5000/items/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => alert("Successfully deleted"));
  }
  render() {
    return (
        <div className="underNav">
        <Link to= "/newItem"><button className="buttonStyle">Create New Item</button></Link>
        {this.state.items.map((c) =>(
          <p key={c._id}>
            <h3>{c.Manufacturer}</h3> <div>{c.Model} €{c.Price}</div>
            <div>
              <button className="buttonStyle" onClick={() => this.updateItem(c._id)}>Update</button>
              <button className="buttonStyle" onClick={() => this.deleteItem(c._id)}>Delete</button>
            </div>
          </p>
        ))}
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default ItemsReact;