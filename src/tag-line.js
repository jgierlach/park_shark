import React from 'react';
import './tag-line.css'
import ParkSharkLogoFull from './ParkSharkFull.png'

const TagLine = () => {
    return (
      <div className='row center container background margin-top'>
        <div className="col s12">
          <img className="park-shark-logo" src={ParkSharkLogoFull} alt=""/>
        </div>
        <div className="col-s12">
          <blockquote className="white-text">"Politics aint worrying this country so much as where to find a parking space."</blockquote>
        </div>
      </div>   
    )
}

export default TagLine