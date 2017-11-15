import styled from 'styled-components'
import React from 'react'

const Footers = styled.div`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
`
const Count = styled.div`
  float: left;
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

const Choose = styled.a`
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
const Clean = styled.button`
  float: right;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  color: inherit;
  background: none;
  font-size: 100%;
  border: none;
  outline: none;
`

const Tag = props => {
  return <Footers>
    {props.children}
  </Footers>
}

Tag.Footers = Footers
Tag.Count = Count
Tag.Ul = Ul
Tag.Li = Li
Tag.Choose = Choose
Tag.Clean = Clean
export default Tag
