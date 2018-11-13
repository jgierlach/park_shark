import React, { Component } from 'react'
import './App.css'
import Navbar from './navbar'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'
import Blog from './blog'
import Contact from './contact'
import Mission from './mission'
import Home from './home'
import Footer from './footer'
import Donation from './donation'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/mission' component={Mission} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/donate' component={Donation} />
              <Redirect from='/' to='/home'/>
            </Switch>
          <Footer />  
        </div>
      </Router>
    );
  }
}

export default App;
