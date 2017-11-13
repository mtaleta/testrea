import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  padding: 16px 16px 16px 60px;
  border: none;
`

const Edit = styled.input`
  margin: 0;
  font-size: 24px;
  border: none;
`

const Input = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

Input.Wrapper = Wrapper
Input.Edit = Edit
export default Input
