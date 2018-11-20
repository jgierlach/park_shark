import React from 'react'
import './call-to-action.css'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
     <div className="container center">   
        <form action="https://www.getdrip.com/forms/30548370/submissions" method="post" data-drip-embedded-form="30548370">
            <h5 data-drip-attribute="">Get updates on our pilot program.</h5>
            <div data-drip-attribute="description"></div>
            <div className="row">
              <div className="input-field col s6">
                <label htmlFor="drip-name">name</label>
                <input type="text" id="drip-name" name="fields[name]" defaultValue="" />
              </div>
              <div className="input-field col s6">
                <label htmlFor="drip-email">email</label>
                <input type="email" id="drip-email" name="fields[email]" defaultValue="" />
              </div>
            </div>  
            <div className="row">
              <div className="col s6">
                <button className="waves-effect waves-light btn" type="submit" value="Sign Up" data-drip-attribute="sign-up-button">Sign Up</button>
               </div>
              <div className="col s6">
                <Link to="/donate">
                  <button className="btn">
                    Donate!
                  </button>
                </Link>
              </div> 
            </div>
       </form>
       {/* <div className="row">
         <div className="col s12">
           <a target="_blank" rel="noopener noreferrer" href="http://gofundme.com/parkshark">
             <button className="btn donate-btn">Donate!</button>
          </a>
         </div>
       </div> */}
    </div> 
  )
}

export default CallToAction
