import styled from 'styled-components'
import React from 'react'

const List = styled.div`
  ox-sizing: border-box;
`

const Ul = styled.ul`
  display: flex;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`

const Li = styled.li`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
`

const Item = styled.div`
  width: 100%;
  padding-left: 0.75rem;
`

const Time = styled.div`
  color: #bcbcbc;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`

const Text = styled.div`
  white-space: pre-wrap;
`
const List2 = props => {
  return <List>
    {props.children}
  </List>
}

List2.List = List
List2.Ul = Ul
List2.Li = Li
List2.Item = Item
List2.Time = Time
List2.Text = Text

export default List2
