import React, {Component} from 'react';
import './App.css';
import Home from "./Component/Home/Home";
import Toolbar from "./Component/Toolbar/Toolbar";

class App extends Component {
  render() {
      return (
          <div className="App">
              <Toolbar/>
              <Home />
          </div>
      );
  }
}

export default App;
