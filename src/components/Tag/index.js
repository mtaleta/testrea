import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  color: #777;
  text-align: center;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
`

const Li = styled.li`
  display: inline;
`

const A = styled.a`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }
  &:checked {
    border-color: rgba(175, 47, 47, 0.2);
  }

`

const Tag = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

Tag.Wrapper = Wrapper
Tag.Ul = Ul
Tag.Li = Li
Tag.A = A

export default Tag
