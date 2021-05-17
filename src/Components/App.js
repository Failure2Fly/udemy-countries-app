import React, { Component } from 'react';
import '../Resources/App.css';
import ResultCard from './CreateResultCard';
import Header from './Header';

class App extends Component {

  render(){
    return (
      <div>
          <Header/>
          <ResultCard/>
      </div>
    );
  }
}



export default App;
