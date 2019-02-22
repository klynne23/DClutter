import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';
import {Map, TileLayer, Marker, Popup } from 'react-leaflet';

class App extends Component {

state = {
  lat: 38.8843,
  lng: -77.1078,
  zoom: 13
}

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
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        <Map 
  
        center={position} zoom={this.state.zoom}>
          <TileLayer 
        
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          <Marker position={position}>
            <Popup>
              {position} <br/> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default App;
