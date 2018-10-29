import React from 'react'
// import ParkSharkCensor from 'ParkSharkCensor.png'
import './blog.css'

const blog = () => {
    return (
     <a href="https://www.hollandsentinel.com/news/20181021/hope-students-offer-solution-to-downtown-holland-parking"> 
      <div className="container">
        <div id="margin" className="row margin">
          <div className="col s12 m4 center margin">
            <div id="margin" className="card margin">
              <div className="card-image">
                {/* <img src={ParkSharkCensor} alt=""/> */}
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