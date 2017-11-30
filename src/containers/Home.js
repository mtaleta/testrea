import React, { Component } from 'react'
import Footer from 'components/Footer'
import AnimationSnow from 'components/Animation_Snow'
import Menu from './Menu'
import Circle from 'components/Circle'
import Key from 'components/Js30/Key_Sequence_Detection'
export default class Title extends Component {
  render () {
    return (
      <div>
        <AnimationSnow />
        <Menu />
        <Circle />
        <Footer />
        <Key />
      </div>
    )
  }
}
