import React from "react";
import { Route } from "react-router-dom";
import {connect} from 'react-redux'
import {fetchData} from '../actions'
import Navbar from "./Navbar";
import Header from "./Header";
import AboutCompany from "./AboutCompany";
import Services from "./Services";
import TechServices from "./TechServices";
import SocialMedia from "./SocialMedia";
import Statistics from "./Statistics";
import Subscripe from "./Subscripe";
import News from "./News";
import Footer from "./Footer";
import T from "./T";
import Event from "./Event";
import EventDetails from "./EventDetails";
import data from '../data.json'
class App extends React.Component {
  
 
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Header />
          <AboutCompany />
          <Services />
          <TechServices />
          <SocialMedia />
          <Statistics />
          <News />
          <Subscripe />
        </Route>
        <Route path="/events">
          <T />
        </Route>
        <Route path="/e" component={EventDetails} />
        <Footer />
      </div>
    );
  }
}

export default connect(null,{
  fetchData
})(App);
