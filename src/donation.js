import React from 'react'

const donations = () => {
    return (
      <div className="container">
        <div className="row center">
          <div className="col s12">
            <h3>Help Park Shark by donating to purchase our first round of parking sensors</h3>
          </div>
        </div>
        <div className="row center">
          <div className="col s12">
            <a target="_blank" rel="noopener noreferrer" href="http://gofundme.com/parkshark">
              <button className="btn-large">Donate!</button>
            </a>
          </div>
        </div>
      </div>
    )
}

export default donations