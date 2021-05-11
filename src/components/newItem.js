import React, { Component } from "react";


class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state ={
        Manufacturer:'',
        Model:'',
        Price:'',
    }
  }
  changeHandler =(e) =>{
      this.setState({[e.target.name]: e.target.value})
  }
  postItem = (e) =>{
      e.preventDefault()
      console.log(this.state);
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
        .then(data => console.log(data))
        .catch(err => console.log(err)); 
  }
  
  render() {
      const {Manufacturer, Model, Price} = this.state;
    return (
        <div className="underNav">
        <form onSubmit={this.postItem}>
            <label>Manufacturer: 
                <input 
                    type="text" 
                    name="Manufacturer" 
                    value={Manufacturer}
                    onChange={this.changeHandler}
                /></label>
            <label>Model: 
                <input 
                    type="text" 
                    name="Model" 
                    value={Model}
                    onChange={this.changeHandler}
                /></label>
            <label>Price: 
                <input 
                    type="text" 
                    name="Price" 
                    value={Price}
                    onChange={this.changeHandler}
                /></label>
            <button type="submit" value="Submit" >Submit</button>
      </form>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default NewItem;