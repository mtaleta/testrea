import styled from 'styled-components'
import React from 'react'

const Back = styled.div`
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

const Background = props => {
  return <div>
    {props.children}
  </div>
}

Background.Back = Back

export default Background
