import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="logo">Keckie's</h1>
          <h2 className="subTitle">Book List</h2>
        </div>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
