import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  font-size: 24px;
`

const List = styled.div`
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  
`

const Lable = props => {
  return <Wrapper>
    <List />
  </Wrapper>
}

Lable.Wrapper = Wrapper
Lable.List = List

export default Lable
