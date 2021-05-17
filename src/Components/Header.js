import React, { Component } from 'react';
import '../Resources/App.css';


class Header extends Component {

  render(){

      return (
        <div className="header">
          <h1>Sorting Options</h1>
          <div className="sort_options">
            <button>Country</button>
            <button>Population</button> 
          </div>                
        </div>
      )
    }


}



export default Header;
