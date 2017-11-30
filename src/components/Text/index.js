import styled from 'styled-components'
import React from 'react'

const H1 = styled.div`
  font-size: 24px
`

const Text = props => {
  return <div>
    {props.children}
  </div>
}

Text.H1 = H1

export default Text
