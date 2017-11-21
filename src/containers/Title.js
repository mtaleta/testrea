import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class Title extends Component {

  render () {
    return (
      <div>
        <Link className='btn' to='/main'>
          Todos
        </Link>
        <br />
        <Link className='btn' to='/'>
          back
        </Link>
      </div>
    )
  }
}
