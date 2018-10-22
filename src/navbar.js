import React from 'react';
import './Navbar.css'
import ParkSharkLogo from './ParkShark.png'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
          <div className="nav-wrapper">
            <NavLink className="brand-logo" to='/home'>
              Logo 
            </NavLink>
            <a className="sidenav-trigger" href="#" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to='/home'
                  activeStyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li>
              <li>     
                <NavLink to='/mission'
                  activeStyle={{
                  color: '#EF4907'
                 }}>Mission   
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'
                  activeStyle={{
                  color: '#EF4907'
                }}>Contact   
                </NavLink>
              </li>
              <li>
                <NavLink to='/blog'
                  activeStyle={{
                  color: '#EF4907'
                }}>Blog   
                </NavLink>
              </li>
            </ul>
            <ul id="mobile-links" className="sidenav">
              <li>
                <NavLink to='/home'
                  activeStyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li>
              <li>     
                <NavLink to='/mission'
                  activeStyle={{
                  color: '#EF4907'
                 }}>Mission   
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'
                  activeStyle={{
                  color: '#EF4907'
                }}>Contact   
                </NavLink>
              </li>
              <li>
                <NavLink to='/blog'
                  activeStyle={{
                  color: '#EF4907'
                }}>Blog   
                </NavLink>
              </li>  
            </ul>
          </div>
        </nav>
    )
  }

export default Navbar