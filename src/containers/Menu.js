import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'components/Buttons'
import Footer from 'components/Footer'

const LinkCss = {
  'textDecoration': 'none'
}
const Img = {
  'display': 'block',
  'width': '100%',
  // height 撐滿可用空間
  'height': '-webkit-fill-available',
  'backgroundImage': 'url(images/w-na-bg.jpg)'
}
export default class Title extends Component {
  render () {
    return (
      <div style={Img}>
        <Button>
          <Link style={LinkCss} to='/main'>Todos</Link>
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
          <Link style={LinkCss} to='/blog'>Blog</Link>
        </Button>
        <Button>
          <Link style={LinkCss} to='/'>back</Link>
        </Button>
        <br />
        <Button>
          <Link style={LinkCss} to='/canvas'>Canvas</Link>
        </Button>
        <br />
        <Button>
          <Link style={LinkCss} to='/book'>Book</Link>
        </Button>
        <Footer />
      </div>
    )
  }
}
