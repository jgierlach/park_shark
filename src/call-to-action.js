import React from 'react'

const CallToAction = () => {
  return (
     <div className="container center">   
        <form action="https://www.getdrip.com/forms/759119398/submissions" method="post" data-drip-embedded-form="759119398">
            <h5 data-drip-attribute="headline">Stay Updated</h5>
            <div data-drip-attribute="description"></div>
            <div>
              <label htmlFor="drip-name">name</label><br />
              <input type="text" id="drip-name" name="fields[name]" defaultValue="" />
            </div>
            <div>
              <label htmlFor="drip-email">Email Address</label>
              <br />
              <input type="email" id="drip-email" name="fields[email]" defaultValue="" />
            </div>
            <div>
              <input type="submit" value="Sign Up" data-drip-attribute="sign-up-button" />
            </div>
       </form>
    </div> 
  )
}

export default CallToAction
