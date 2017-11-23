import styled from 'styled-components'
import React from 'react'

const Ul = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
`

const Li = styled.li`
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;

  &:first-child {
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem
  }
  &:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: .25rem;
  }
`
const List = props => {
  return <Ul>
    <Li />
  </Ul>
}

List.Ul = Ul
List.Li = Li

export default List
