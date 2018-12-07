import React from 'react'
// import ParkingCensor from 'ParkingCensor.jpg'
import './blog.css'

const blog = () => {
    return (
     <a href="https://www.hollandsentinel.com/news/20181021/hope-students-offer-solution-to-downtown-holland-parking">
     {/* Some messy inline styles to get the one article to center on the page must clean this up later  */}
      <div style={{marginTop: "20px", width: "100%", display: "flex", justifyContent: "center"}} className="container">
        <div className="row center">
          <div className="col s12 center">
            <div className="card">
              <div className="card-image">
                <img alt=""/>
                {/* <span class="card-title">Card Title</span> */}
              </div>
             <div className="card-content">
              <p>Park Shark in the Holland Sentinal.</p>
            </div>
            <div className="card-action">
               Read Article
           </div>
           </div>
        </div>
       </div>
      </div>
    </a>
    )
}

export default blog