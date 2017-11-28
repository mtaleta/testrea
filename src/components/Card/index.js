import styled from 'styled-components'
// import React, { Component } from 'react'
// import PropType from 'prop-types'
// import FontAwesome from 'react-fontawesome'

const Cards = styled.div`
  width:  320px;
  height: 380px;
  overflow: hidden;
  position: relative;
  margin: 20px;
  border-radius: 15px;
  background-color: #555;
`
const Bgimg = styled.div`
  background-color: white;
  width: 320px;
  height: 260px;
  background-position: center;
  background-size: contain;
`

const CardInfo = styled.div`
  padding: 20px 20px;
  height: 150px;
  background: transparent;
`
const Title = styled.div`
  color: #eee;
  font-size: 24px;
  margin-bottom: 10px;
`

const Des = styled.div`
  font-size: 12px;
  color: #ccc;
`

const Buttons = styled.div`
  position: absolute;
  top: 240px;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  a:last-child{
    margin-right: 6px;
  }
`
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #bbb;
  margin: 0 5px;
  text-align: center;
  line-height: 40px;
  color: white;
  font-size: 25px;
  transition: .25s all;
  border-radius: 40px;
  &:hover{
    transform: scale(1.5) rotate(370deg);
  }
`
const Demo = styled.div`
  border-radius: 40px;
  background-color: rgb(255, 101,116);
`
const Repo = styled.div`
  border-radius: 40px;
  background-color: #222;
`

const Card = props => {
  return <Card>
    {props.children}
  </Card>
}

Card.Cards = Cards
Card.Bgimg = Bgimg
Card.CardInfo = CardInfo
Card.Title = Title
Card.Des = Des
Card.Buttons = Buttons
Card.Demo = Demo
Card.Circle = Circle
Card.Repo = Repo

export default Card
