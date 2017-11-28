import React, { Component } from 'react'

export default class NotFound extends Component {
  render () {
    return (
      <div className='page404' style={{'marginTop': '60px'}}>
        <div>
          <div>
            <div>
              <h3>{'The page you\'re looking for could not be found.'}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
