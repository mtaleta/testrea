import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Buttons'
import Footer from '../components/Footer'

const LinkCss = {
  'textDecoration': 'none'
}

export default class Title extends Component {
  render () {
    return (
      <div>
        <Button>
          <Link type='button' style={LinkCss} to='/main'>Todos</Link>
        </Button>
        <br />
        <Button>
          <Link style={LinkCss} to='/app'>WeatherApp</Link>
        </Button>
        <br />
        <Button>
          <Link style={LinkCss} to='/video'>Video</Link>
        </Button>
        <Button>
          <Link style={LinkCss} to='/'>back</Link>
        </Button>
        <Footer />
      </div>
    )
  }
}
