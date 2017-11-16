import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  margin: 10px 10px;
  color: #fff;
  background-color: #337ab7;
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover{
    background-color: #2e6da4;
  }
`

const Span = styled.span`
  position: relative;
  top: -1px;
  color: #337ab7;
  background-color: #fff;
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 10px;
  margin-left: 8px;
`
const Badges = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

Badges.Wrapper = Wrapper
Badges.Span = Span
export default Badges
