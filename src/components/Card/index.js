import styled from 'styled-components'
import React from 'react'
import PropType from 'prop-types'

const Card = styled.div`
  position: relative;
  word-wrap: breal-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`

const Image = styled.img`
  width: 100%;
  border-top-left-radius: calc(.25rem - 1px)
`

const Cards = props => {
  return <div>
    {props.children}
  </div>
}

Cards.Card = Card
Cards.Image = Image

export default Cards