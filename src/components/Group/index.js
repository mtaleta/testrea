import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'

const sizeStyles = {
  small: `
    height: 18px;
    padding: 5px 10px;
    font-size: 12px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px; 
  `,
  max: `
    height: 24px;
    padding: 10px 16px;
    font-size: 18px;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  `
}

const spanStyles = {
  small: `
    padding: 5px 10px;
    font-size: 12px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px; 
  `,
  max: `
    padding: 10px 16px;
    font-size: 18px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  `
}

const Wrapper = styled.div`
  position: relative;
  display: table;
  border-collapse: separate;
  z-index: 2;
  float: left;
  width: 60%;
  margin-bottom: 10px;

`

const Span = styled.span`

  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  width: 1%;
  display: table-cell;
  ${props => get(spanStyles, get(props, 'size'))}
`

const Input = styled.input`
  height: 20px;
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  color: #555;
  border: 1px solid #ccc;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px; 
  ${props => get(sizeStyles, get(props, 'size'))}
`

const Group = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

Group.propTypes = {
  size: PropTypes.oneOf(['small', 'max'])
}

Group.Span = Span
Group.Input = Input

export default Group
