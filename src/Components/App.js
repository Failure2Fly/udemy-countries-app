import React, { Component } from 'react';
import '../Resources/App.css';


class App extends Component {

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
              <img src={item.flag} className="flag"/>
              <h3>Population: {item.population}</h3>
              <button>Click For More Information</button>             
            </div>        
          ))}                   
        </div>
      )
    }

  }

}



export default App;
