import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
/* import Order from "./components/Orderdetails"; */
import Gallery from "./components/gallery"; 
import About from './components/aboutus';
import ContactUs from './components/contactForm'; 
import Login from './components/Login';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 


function App(){
  return(
    
    <Fragment>
      <Router>
        <Navbar />
          <Route exact path="/" component={Home} />
      
            <Switch>
            <Route exact path="/About" component={About} />
              
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/ContactUs" component={ContactUs} /> 
            </Switch>
      
        <Footer />
      </Router>
     
      
    </Fragment>
  )
}
export default App;

