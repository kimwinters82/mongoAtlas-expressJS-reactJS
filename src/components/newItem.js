import React, { Component } from "react";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state ={
        Manufacturer:'',
        Model:'',
        Price:'',
        update: false,
        items: [],
        phone: ''
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(items => this.setState({items: items}, () => console.log(this.state.items)));
}
  changeHandler =(e) =>{
      this.setState({[e.target.name]: e.target.value})
  }
  handlePhone = (e) => {
    this.setState({phone: e.target.value})
    this.setState({update: true})
  }
  postItem = (e) =>{
      e.preventDefault()
      if (this.state.update){
        const options ={
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Price: this.state.Price})
        }
    fetch(`http://localhost:5000/items/${this.state.phone}`, options)
        .then(res => res.json())
        .then(data => alert("Successfully updated: ", data))
        .catch(err => alert("Error: ",err));
    }
    else  {
      const options ={
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Manufacturer: this.state.Manufacturer, 
            Model: this.state.Model, 
            Price: this.state.Price
        })
      }
      fetch(`http://localhost:5000/items`, options)
        .then(res=> res.json())
        .then(data => alert("Successfully added new Item", data))
        .catch(err => alert("Error: ",err)); 
    }
    this.setState({update:false});
    }
  
  render() {
      const {Manufacturer, Model, Price} = this.state;
    return (
        <div className="underNav">
        <h3>Update Item OR Add Item</h3>
        <p>To update an items price: select item from the list and enter your new price.</p>
        <label name="Item"><b>Item:</b> </label> 
            <select value ={this.state.phone} onChange={this.handlePhone}>
                <option>Please select</option>
                {this.state.items.map((i) => (
                    <option  key={i._id} value={i._id} >
                    {i.Manufacturer} {i.Model}
                </option> ))}  
            </select>
            <button className="buttonStyle"onClick={()=> this.setState({update:false})}>Reset</button>
            {this.state.update === false &&
            <p>To create a new item: enter the manufacturer, model and price below.</p>  }      
        <form onSubmit={this.postItem}>
            {this.state.update === false && 
                <label>Manufacturer: 
                    <input 
                        type="text" 
                        name="Manufacturer" 
                        value={Manufacturer}
                        onChange={this.changeHandler}
                    /></label>
            }
            {this.state.update === false && 
            <label>Model: 
                <input 
                    type="text" 
                    name="Model" 
                    value={Model}
                    onChange={this.changeHandler}
                /></label>
            }
            <label>Price: 
                <input 
                    type="text" 
                    name="Price" 
                    value={Price}
                    onChange={this.changeHandler}
                /></label>
            <button className="buttonStyle"type="submit" value="Submit"> {this.state.update === true ?"Update":"Create New Item"}</button>
      </form>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default NewItem;