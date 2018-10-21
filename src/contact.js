import React from 'react';

const contact = () => {
    return (
    <div className="container center">
      <div className="col s12">
        <h3>Contact Us</h3>
      </div>
      <div>
        <form action="https://formspree.io/parkshark.us@gmail.com"
        method="POST">
        {/* This row contains the names fields on the same line*/}
           <div className="row">
             <div className="input-field col s6">
               <label htmlFor="firstName">first name</label>
               <input id="firstName" type="text" name="name" />
             </div>
             <div className="input-field col s6">
               <label htmlFor="lastName">last name</label>
               <input id="lastName" type="text" name="name" />
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <label htmlFor="email">email</label>
               <input id="email" className="validate" type="email" name="_replyto" />
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <label htmlFor="textarea">message</label>
               <textarea id="textarea" className="materialize-textarea" type="text" name="message" />
             </div>
           </div>
           <input type="submit" value="Send"></input>
        </form>
      </div>
    </div>
  )
}

export default contact