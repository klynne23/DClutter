import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from './utils/API';

import {Map, TileLayer, Marker, Popup } from 'react-leaflet';

import Main from "./pages/Main";
import AddCharity from "./pages/AddCharity";
import Wrapper from "./components/Wrapper";
import Results from "./pages/Results"
import "./index.css";
// import './App.css';


class App extends Component {

state = {
  lat: 38.8843,
  lng: -77.1078,
  zoom: 13
}

componentDidMount() {
  this.allCenters();
};

allCenters = () => {
  API.getCenters()
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

      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Main} />
            <Route exact path="/add" component={AddCharity} />
            <Route exact path="/results" component={Results} />
          </Wrapper>
        </div>
      </Router>

    );
  }
}

export default App;
