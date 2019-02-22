import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';

class App extends Component {

componentDidMount() {
  this.allCenters();
};

// Input new center data as an object: this.addCenter({name: "Test Add", info: "This is a test"})
addCenter = centerData => {
  API.saveCenter(centerData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

allCenters = () => {
  API.getCenters()
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

// Input search criteria as an array: this.findByCategories(["clothing", "toys"])
findByCategories = categories => {
  API.findByCategories(categories)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

// Example request: this.oneCenter("5c6ee6ae22c598f132b98f1c")
oneCenter = id => {
  API.findById(id)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
};

// Example request: this.updateCenter ("5c6ee6ae22c598f132b98f1c", {info: "Updated info"})
updateCenter =(id, centerData) => {
  API.updateCenter(id, centerData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
