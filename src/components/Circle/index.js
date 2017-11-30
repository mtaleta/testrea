// import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

// 只有設在body才有效果
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #2C3D4F;
`
const Space = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 50%;
  filter: blur(50px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color:#3e5670;
`
const Moon = styled.div`
  background-color: #fff;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -40px -40px #e6e6e6 inset, 0px 0px 40px rgba(0, 0, 0, 0.3);
`
const Hole1 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  left: 120px;
  top: 130px;

  background-color: #ccc;
  box-shadow:10px 10px #b3b3b3 inset;
  position: absolute;
  transform: translate(-50%, -50%);
`
const Hole2 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  left: 230px;
  top: 290px;

  background-color: #ccc;
  box-shadow:10px 10px #b3b3b3 inset;
  position: absolute;
  transform: translate(-50%, -50%);
`
const Hole3 = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  left: 140px;
  top: 260px;

  background-color: #ccc;
  box-shadow:10px 10px #b3b3b3 inset;
  position: absolute;
  transform: translate(-50%, -50%);
`
const Hole4 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  left: 280px;
  top: 150px;

  background-color: #ccc;
  box-shadow:10px 10px #b3b3b3 inset;
  position: absolute;
  transform: translate(-50%, -50%);
`
const Red = styled.div`
  background-color: #f24;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-298.042px, 37.0336px);
  box-shadow: -10px -10px #bb001d inset, 0px 0px 40px rgba(0, 0, 0, 0.3);
  z-index: 100;
`
const Yellow = styled.div`
  background-color: #fe3;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: -10px -10px #ccbb00 inset, 0px 0px 40px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(298.753px, 29.8751px);
  z-index: 100;
`
const Trace1 = styled.div`
  width: 680px;
  height: 680px;
  border-radius: 50%;
  border: dashed 1px white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
`
const Trace2 = styled.div`
  width: 568px;
  height: 568px;
  border-radius: 50%;
  border: dashed 1px white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
`

class Circle extends React.Component {
  render () {
    return (
      <Wrapper>
        <Space />
        <Moon>
          <Hole1 />
          <Hole2 />
          <Hole3 />
          <Hole4 />
        </Moon>
        <Red />
        <Yellow />
        <Trace1 />
        <Trace2 />
      </Wrapper>
    )
  }
}

Circle.Wrapper = Wrapper
Circle.Space = Space
Circle.Hole1 = Hole1
Circle.Hole2 = Hole2
Circle.Hole3 = Hole3
Circle.Hole4 = Hole4
Circle.Moon = Moon
Circle.Red = Red
Circle.Yellow = Yellow
Circle.Trace1 = Trace1
Circle.Trace2 = Trace2

export default Circle
