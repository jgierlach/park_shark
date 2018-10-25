import React from 'react'
import './footer.css'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'

const footer = () => {
    return  (
        <footer id="footer" className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
          <p className="left">© 2018 Park Shark</p>
          {/* <ul className="right">
            <li>
              <Link className="grey-text text-lighten-4 right" to="/home">Home</Link>
            </li>
            <li>
              <Link className="grey-text text-lighten-4 right" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="grey-text text-lighten-4 right" to="/blog">Blog/News</Link>
            </li>
          </ul> */}
           </div>
          </div>
        </div>
      </footer>
    )
}

export default footer