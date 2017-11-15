import styled from 'styled-components'
import React from 'react'

const Text = styled.h1`
  position: inherit;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.35);
  line-height: 19px;
  text-shadow: 3px 4px 7px #cccccc;
`

const Title = props => {
  return <div>
    <Text />
  </div>
}

Title.Text = Text

export default Title
