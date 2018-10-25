import React from 'react';
import './tag-line.css'
import ParkSharkLogoFull from './ParkSharkFull.png'

const TagLine = () => {
    return (
     <div> 
      <div className='row center container background margin-top'>
        <div className="col s12">
          <img className="park-shark-logo" src={ParkSharkLogoFull} alt=""/>
        </div>
      </div>
      <div className="row">  
        <div className="col-s12">
          <blockquote>
            <h5>"Politics aint worrying this country one tenth so much as much as where to find a parking space."</h5> 
          </blockquote>
        </div>
      </div> 
     </div>   
    )
}

export default TagLine