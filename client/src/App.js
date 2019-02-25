import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from './utils/API';



import Main from "./pages/Main";
import AddCharity from "./pages/AddCharity";
import Wrapper from "./components/Wrapper";
import Results from "./pages/Results"
import "./index.css";
// import './App.css';


class App extends Component {



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
    
    return (

      <div className="App">
       

      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Main} />
            <Route exact path="/add" component={AddCharity} />
            <Route exact path="/results" component={Results} />
          </Wrapper>
        </div>
      </Router>
      </div>

    );
  }
}

export default App;
