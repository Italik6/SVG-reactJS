import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import Svg from "./components/svg";
import Table from "./components/table";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/svg">SVG</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/table" component={Table} />
          <Route path="/svg" component={Svg} />
        </div>
      </Router>
    );
  }
}

export default App;
