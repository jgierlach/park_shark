import React from 'react';
import './Navbar.css'
import ParkSharkLogo from './ParkShark.png'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return (
    <div className='row blue lighten-1 center'>
      <Router>
        <nav>
          <div>
          <NavLink to='/home'
            activeStyle={{
              color: '#EF4907'
             }}
            >Home </NavLink>  
          <NavLink to='/mission'
            activeStyle={{
              color: '#EF4907'
             }}
            >Mission </NavLink>
            <NavLink to='/contact'
            activeStyle={{
              color: '#EF4907'
             }}
            >Contact </NavLink>
            <NavLink to='/blog'
            activeStyle={{
              color: '#EF4907'
             }}
            >Blog </NavLink>
          </div>
        </nav>
       </Router>
    </div>   
    )
  }

export default Navbar