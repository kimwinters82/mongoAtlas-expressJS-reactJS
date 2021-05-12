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
      
    }
  }
  changeHandler =(e) =>{
      this.setState({[e.target.name]: e.target.value})
  }
  postCust = (e) =>{
      e.preventDefault()
      console.log(this.state);
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
        .then(data => console.log(data, "Success"))
        .catch(err => console.log(err, "Failed")); 
  }
  
  render() {
      
      const {Title, Firstname, Surname, EmailAddress, MobileNumber} = this.state;
      const {HomeAddressLine1, HomeAddressLine2, HomeTown, HomeCityOrCounty, HomeEircode} = this.state;
      const {ShipAddressLine1, ShipAddressLine2, ShipTown, ShipCityOrCounty, ShipEircode} = this.state;
    return (
        <div className="underNav">
        <form onSubmit={this.postCust}>
            <label>Title: 
                <input 
                    type="text" 
                    name="Title" 
                    value={Title}
                    onChange={this.changeHandler}
                /></label>
            <label>Firstname: 
                <input 
                    type="text" 
                    name="Firstname" 
                    value={Firstname}
                    onChange={this.changeHandler}
                /></label>
            <label>Surname: 
                <input 
                    type="text" 
                    name="Surname" 
                    value={Surname}
                    onChange={this.changeHandler}
                /></label>
              <label>EmailAddress: 
                <input 
                    type="text" 
                    name="EmailAddress" 
                    value={EmailAddress}
                    onChange={this.changeHandler}
                /></label>
            <label>MobileNumber: 
                <input 
                    type="text" 
                    name="MobileNumber" 
                    value={MobileNumber}
                    onChange={this.changeHandler}
                /></label>
              <label>Address Line 1: 
                <input 
                    type="text" 
                    name="HomeAddressLine1" 
                    value={HomeAddressLine1}
                    onChange={this.changeHandler}
                /></label>
              <label>Address Line 2: 
                <input 
                    type="text" 
                    name="HomeAddressLine2" 
                    value={HomeAddressLine2}
                    onChange={this.changeHandler}
                /></label>
                <label>Town: 
                <input 
                    type="text" 
                    name="HomeTown" 
                    value={HomeTown}
                    onChange={this.changeHandler}
                /></label>
              <label>City or County: 
                <input 
                    type="text" 
                    name="HomeCityOrCounty" 
                    value={HomeCityOrCounty}
                    onChange={this.changeHandler}
                /></label>
              <label>Eircode: 
                <input 
                    type="text" 
                    name="HomeEircode" 
                    value={HomeEircode}
                    onChange={this.changeHandler}
                /></label>
            
            
              <label>Address Line 1: 
                <input 
                    type="text" 
                    name="ShipAddressLine1" 
                    value={ShipAddressLine1}
                    onChange={this.changeHandler}
                /></label>
              <label>Address Line 2: 
                <input 
                    type="text" 
                    name="ShipAddressLine2" 
                    value={ShipAddressLine2}
                    onChange={this.changeHandler}
                /></label>
                <label>Town: 
                <input 
                    type="text" 
                    name="ShipTown" 
                    value={ShipTown}
                    onChange={this.changeHandler}
                /></label>
              <label>City or County: 
                <input 
                    type="text" 
                    name="ShipCityOrCounty" 
                    value={ShipCityOrCounty}
                    onChange={this.changeHandler}
                /></label>
              <label>Eircode: 
                <input 
                    type="text" 
                    name="ShipEircode" 
                    value={ShipEircode}
                    onChange={this.changeHandler}
                /></label>
            
            <button type="submit" value="Submit" >Submit</button>
      </form>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default NewCust;