import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'components/Buttons'
import Footer from 'components/Footer'
import Icon from 'components/Icon'
import Loading from 'components/Loading'

const { AnimalCircle, LoadingCircle } = Loading
const {Wrapper} = Icon

const LinkCss = {
  'textDecoration': 'none'
}

const Img = {
  // height 撐滿可用空間
  // 'height': '-webkit-fill-available',
  'height': '100vh',
  'backgroundColor': '#354b5b',
  // 'backgroundImage': 'url(images/w-na-bg.jpg)'
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center'
}
const FlexLink = {
  'display': 'flex',
  'alignItems': 'flex-start',
  'justifyContent': 'center',
  'flexDirection': 'column',
  'flexWrap': 'wrap'
}

const FlexLogin = {
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center'
}
export default class Title extends Component {
  constructor (props) {
    super(props)

    this.state = {
      postLoading: false
    }
    this.clickLoad = this.clickLoad.bind(this)
  }

  clickLoad () {
    this.setState({
      postLoading: true
    })
  }

  render () {
    const { postLoading } = this.state
    return (
      <div style={Img}>
        <div style={FlexLink} onClick={this.clickLoad} >
          <Button><Link style={LinkCss} to='/main'>Todos</Link></Button>
          <Button><Link style={LinkCss} to='/app'>WeatherApp</Link></Button>
          <Button><Link style={LinkCss} to='/video'>Video</Link></Button>
          <Button><Link style={LinkCss} to='/blog'>Blog</Link></Button>
          <Button><Link style={LinkCss} to='/'>back</Link></Button>
          <Button><Link style={LinkCss} to='/canvas'>Canvas</Link></Button>
          <Button><Link style={LinkCss} to='/book'>Book</Link></Button>
          <Button><Link style={LinkCss} to='/weathermood'>WeatherMood</Link></Button>
          <Button><Link style={LinkCss} to='/saga'>Saga</Link></Button>
        </div>
        <div style={FlexLogin}>
          <Wrapper name='Facebook'>Login with Facebook</Wrapper>
          <Wrapper name='Google'>Login with Google</Wrapper>
        </div>
        <div>{
          postLoading &&
          <AnimalCircle>
            <LoadingCircle />
          </AnimalCircle>
        }
        </div>
        <Footer />
      </div>
    )
  }
}
