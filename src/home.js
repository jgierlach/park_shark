import React from 'react';
import './home.css';
import TagLine from './tag-line'
import CallToAction from './call-to-action'

const home = () => {
    return (
      <div className="container center">
        <TagLine />
        <CallToAction />
      </div>
    )
}

export default home