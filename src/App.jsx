import React, {Component} from 'react';
import './App.css';
import Home from "./Component/Home/Home";
import CustomNavbar from "./Component/Toolbar/CustomNavbar";
import About from "./Component/About/About";
import Products from "./Component/Products/Products";
import Footer from "./Component/Footer/Footer";

class App extends Component {
  render() {
      return (
          <div className="App">
              <CustomNavbar/>
              <Home />
              <About/>
              <Products/>
              <Footer/>
          </div>
      );
  }
}

export default App;
