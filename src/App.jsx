import React, {Component} from 'react';
import './App.css';
import Home from "./Component/Home/Home";
import CustomNavbar from "./Component/Toolbar/CustomNavbar";
import About from "./Component/About/About";
import Products from "./Component/Products/Products";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact/Contact";


class App extends Component {
  render() {
      return (
          <div className="App">
              <CustomNavbar/>
              <Home />
              <About/>
              <Products/>
              <Contact/>
              <Footer/>
          </div>
      );
  }
}

export default App;
