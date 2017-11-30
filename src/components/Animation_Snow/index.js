import styled from 'styled-components'
import React, { Component } from 'react'
import Scroll from 'react-scroll'

const scroll = Scroll.animateScroll

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
`

const Snow = styled.div`
  background: none;
  font-family: Androgyne;
  background-image: url('http://www.wearewebstars.dk/codepen/img/s1.png'), url('http://www.wearewebstars.dk/codepen/img//s2.png'), url('http://www.wearewebstars.dk/codepen/img//s3.png');
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index:1;
  -webkit-animation: snow 20s linear infinite;
  -moz-animation: snow 20s linear infinite;
  -ms-animation: snow 20s linear infinite;
  animation: snow 20s linear infinite;
  }
  @keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
  }
  @-moz-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 400px 1000px, 200px 400px, 100px 300px;}
  }
  @-webkit-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
  }
  @-ms-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
  }
  background-color: #333;
`

const Title = styled.div`
  margin-top: -10%;
  color: #eee;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  z-index: 1;
`

const ScrollDown = styled.div`
  font-size: .5rem;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, 0);
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  color: #fff;
  border:1px solid rgba(102,217,239, .5);
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
`

class AnimationSnow extends Component {
  constructor (props) {
    super(props)

    this.handleScrollDown = this.handleScrollDown.bind(this)
  }
  handleScrollDown () {
    scroll.scrollTo(window.innerHeight)
  }

  render () {
    return (
      <Body>
        <Snow />
        <Title>Hello</Title>
        <ScrollDown onClick={this.handleScrollDown} >
          <div>▽</div>
        </ScrollDown>
      </Body>
    )
  }
}

AnimationSnow.Body = Body
AnimationSnow.Snow = Snow

export default AnimationSnow
