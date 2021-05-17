import React, { Component } from 'react';
import '../Resources/App.css';

class ResultCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json
      })
      console.log(json)
    });
  }


  render(){

    var { isLoaded, items } = this.state;

    if (!isLoaded){
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="countryDetails">
          {items.map(item => (
            <div className="indvCountry">
              <h1>{item.name}</h1>
              <img alt="flag of {item.flag}" src={item.flag} className="flag"/>
              <h3>Population: {item.population}</h3>
              <button>Click For More Information</button>             
            </div>        
          ))}                   
        </div>
      )
    }

  }

}



export default ResultCard;
