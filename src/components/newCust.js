import React, { Component } from "react";

class NewCust extends Component {
  constructor(props) {
    super(props);
    this.state ={
      Title: '', 
      Firstname:'',
      Surname: '',
      EmailAddress: '',
      MobileNumber: '',
      HomeAddressLine1: '',
      HomeAddressLine2: '',
      HomeTown: '',
      HomeCityOrCounty: '',
      HomeEircode: '',
      ShipAddressLine1: '',
      ShipAddressLine2: '',
      ShipTown: '',
      ShipCityOrCounty: '',
      ShipEircode: '',
      update: false,
      customers: []
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:5000/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers: customers}));
  }
  handleCust = (e) => {
    this.setState({customer: e.target.value})
    this.setState({update: true});
  }
  changeHandler =(e) =>{
      this.setState({[e.target.name]: e.target.value})
  }
  postCust = (e) => {
      e.preventDefault()
      if (this.state.update === true){
        const options ={
          method: 'PATCH',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Title: this.state.Title,
            EmailAddress: this.state.EmailAddress,
            MobileNumber: this.state.MobileNumber,
            HomeAddress:{
                AddressLine1: this.state.HomeAddressLine1,
                AddressLine2: this.state.HomeAddressLine2,
                Town: this.state.HomeTown,
                CityOrCounty: this.state.HomeCityOrCounty,
                Eircode: this.state.HomeEircode,
            }
          })//stringify
        }//options
        fetch(`http://localhost:5000/customers/${this.state.customer}`, options)
          .then(res=> res.json())
          .then(data => console.log(data, "Successfuy updated customer"))
          .catch(err => console.log(err, "Failed to update customer")); 
      }
      else {
        const options ={
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Title: this.state.Title, 
            Firstname: this.state.Firstname,
            Surname: this.state.Surname,
            EmailAddress: this.state.EmailAddress,
            MobileNumber: this.state.MobileNumber,
            HomeAddress:{
                AddressLine1: this.state.HomeAddressLine1,
                AddressLine2: this.state.HomeAddressLine2,
                Town: this.state.HomeTown,
                CityOrCounty: this.state.HomeCityOrCounty,
                Eircode: this.state.HomeEircode,
            },
            ShippingAddress:{
                AddressLine1: this.state.ShipAddressLine1,
                AddressLine2:this.state.ShipAddressLine2,
                Town: this.state.ShipTown,
                CityOrCounty: this.state.ShipCityOrCounty,
                Eircode: this.state.ShipEircode,
            }
          })//stringify
        }//options
        fetch(`http://localhost:5000/customers`, options)
          .then(res=> res.json())
          .then(data => console.log(data, "Successfully created a new Customer"))
          .catch(err => console.log(err, "Failed to create a new Customer")); 
      }//else
  }//postCust
  
  render() {
      const {Title, Firstname, Surname, EmailAddress, MobileNumber} = this.state;
      const {HomeAddressLine1, HomeAddressLine2, HomeTown, HomeCityOrCounty, HomeEircode} = this.state;
      const {ShipAddressLine1, ShipAddressLine2, ShipTown, ShipCityOrCounty, ShipEircode} = this.state;
    return (
        <div className="underNav">
        <label name="Customer"><b>Choose Customer to update:</b></label>
          <select value ={this.state.customer} onChange={this.handleCust}>
            <option>Please select</option>
              {this.state.customers.map((c) => (
              <option key={c._id} value={c._id}>
              {c.Firstname} {c.Surname}
            </option> ))} 
          </select> 
        <button className="buttonStyle"onClick={()=> this.setState({update:false})}>Reset</button>

        <form onSubmit={this.postCust}>
          <div>
            <label>Title: 
                <input 
                    type="text" 
                    name="Title" 
                    value={Title}
                    onChange={this.changeHandler}
                /></label>
          </div>
            {this.state.update === false &&
            <div>
            <label>Firstname: 
                <input 
                    type="text" 
                    name="Firstname" 
                    value={Firstname}
                    onChange={this.changeHandler}
                /></label>
              </div>}
            {this.state.update === false &&
            <div>
            <label>Surname: 
                <input 
                    type="text" 
                    name="Surname" 
                    value={Surname}
                    onChange={this.changeHandler}
                /></label></div>}
                <div>
              <label>EmailAddress: 
                <input 
                    type="text" 
                    name="EmailAddress" 
                    value={EmailAddress}
                    onChange={this.changeHandler}
                /></label></div>
                <div>
            <label>MobileNumber: 
                <input 
                    type="text" 
                    name="MobileNumber" 
                    value={MobileNumber}
                    onChange={this.changeHandler}
                /></label></div>
              <div><b>Home Address</b></div>
              <div>
              <label>Address Line 1: 
                <input 
                    type="text" 
                    name="HomeAddressLine1" 
                    value={HomeAddressLine1}
                    onChange={this.changeHandler}
                /></label></div>
                <div>
              <label>Address Line 2: 
                <input 
                    type="text" 
                    name="HomeAddressLine2" 
                    value={HomeAddressLine2}
                    onChange={this.changeHandler}
                /></label></div>
                <div>
                <label>Town: 
                <input 
                    type="text" 
                    name="HomeTown" 
                    value={HomeTown}
                    onChange={this.changeHandler}
                /></label></div>
                <div>
              <label>City or County: 
                <input 
                    type="text" 
                    name="HomeCityOrCounty" 
                    value={HomeCityOrCounty}
                    onChange={this.changeHandler}
                /></label></div>
                <div>
              <label>Eircode: 
                <input 
                    type="text" 
                    name="HomeEircode" 
                    value={HomeEircode}
                    onChange={this.changeHandler}
                /></label></div>
              {this.state.update === false &&
              <div><b>Shipping Address</b></div>}
              {this.state.update === false &&
              <div>
              <label>Address Line 1: 
                <input 
                    type="text" 
                    name="ShipAddressLine1" 
                    value={ShipAddressLine1}
                    onChange={this.changeHandler}
                /></label></div>}
              {this.state.update === false &&
              <div>
              <label>Address Line 2: 
                <input 
                    type="text" 
                    name="ShipAddressLine2" 
                    value={ShipAddressLine2}
                    onChange={this.changeHandler}
                /></label></div>}
              {this.state.update === false &&
              <div>
                <label>Town: 
                <input 
                    type="text" 
                    name="ShipTown" 
                    value={ShipTown}
                    onChange={this.changeHandler}
                /></label></div>}
              {this.state.update === false &&
              <div>
              <label>City or County: 
                <input 
                    type="text" 
                    name="ShipCityOrCounty" 
                    value={ShipCityOrCounty}
                    onChange={this.changeHandler}
                /></label></div>}
              {this.state.update === false &&
              <div>
              <label>Eircode: 
                <input 
                    type="text" 
                    name="ShipEircode" 
                    value={ShipEircode}
                    onChange={this.changeHandler}
                /></label></div>}
            <button className="buttonStyle"type="submit" value="Submit">{this.state.update === true ?"Update Customer":"Create New Customer"}</button>
      </form>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default NewCust;