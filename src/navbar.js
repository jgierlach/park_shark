import React from 'react';
import './Navbar.css'
import ParkSharkLogo from './ParkShark.png'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
          <div className="nav-wrapper">
            {/* Beginning of desktop navbar */}
            {/* <NavLink className="brand-logo" to='/home'> */}
              {/* <img src={ParkSharkLogo} id="park-shark-logo" alt="" />  */}
              {/* Park Shark */}
            {/* </NavLink> */}
            {/* Hamburger navbar icon */}
            <a className="sidenav-trigger" href="#" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
               {/* Link to home component */}  
                <NavLink to='/home'
                  activeStyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li> 
              <li>
               {/* Link to mission component */}      
                {/* <NavLink to='/mission'
                  activeStyle={{
                  color: '#EF4907'
                 }}>Mission   
                </NavLink> */}
              </li>
              <li>
               {/* Link to contact component */}
                <NavLink to='/contact'
                  activeStyle={{
                  color: '#EF4907'
                }}>Contact   
                </NavLink>
              </li>
              <li>
                {/* Link to blog component */}
                <NavLink to='/blog'
                  activeStyle={{
                  color: '#EF4907'
                }}>Blog/News   
                </NavLink>
              </li>
              <li>
               {/* Link to donation component */} 
                <NavLink to='/donate'
                  activeStyle={{
                  color: '#EF4907'
                }}>Donate   
                </NavLink>
              </li> 
            </ul>
            {/* End of desktop navbar beginning of mobile navbar */}
            <ul id="mobile-links" className="sidenav">
              <li>
                {/* Mobile Link to home component */}
                <NavLink to='/home'
                  activeStyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li>
              <li>
               {/* Mobile Link to mission component */}     
                {/* <NavLink to='/mission'
                  activeStyle={{
                  color: '#EF4907'
                 }}>Mission   
                </NavLink> */}
              </li>
              <li>
               {/* Mobile Link to contact component */} 
                <NavLink to='/contact'
                  activeStyle={{
                  color: '#EF4907'
                }}>Contact   
                </NavLink>
              </li>
              <li>
               {/* Mobile Link to blog component */} 
                <NavLink to='/blog'
                  activeStyle={{
                  color: '#EF4907'
                }}>Blog/News   
                </NavLink>
              </li>
              <li>
               {/* Mobile Link to donation component */} 
                <NavLink to='/donate'
                  activeStyle={{
                  color: '#EF4907'
                }}>Donate   
                </NavLink>
              </li>  
            </ul>
          </div>
        </nav>
    )
  }

export default Navbar