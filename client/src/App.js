import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddCharity from "./pages/AddCharity";
import Wrapper from "./components/Wrapper";
import Results from "./pages/Results"
import "./index.css";

class App extends Component {
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
};

export default App;
