import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  font-size: 24px;
  background: none;
`

const List = styled.input`
  text-align: center;
  width: 40px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  -webkit-appearance: none;
`

const Toggle = props => {
  return <Wrapper>
    <List type='checkbox' />
  </Wrapper>
}

Toggle.Wrapper = Wrapper
Toggle.List = List

export default Toggle

// type='checkbox帶設置
