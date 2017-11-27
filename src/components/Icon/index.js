import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'

const Wrapper = styled.button`
  padding: 2em;
  box-sizing: border-box;
  position: relative;
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
  }
  ${props => get(IconStyle, get(props, 'name'))}
`

const IconStyle = {
  Facebook: `
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    text-shadow: 0 -1px 0 #354C8C;
    &:before {
      border-right: #364e92 1px solid;
      background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
    }
    &:hover,&:focus {
      background-color: #5B7BD5;
      background-image: linear-gradient(#5B7BD5, #4864B1);
    }
  `,
  Google: `
  background: #DD4B39;
  &:before {
    border-right: #BB3F30 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
  }
  &:hover,&:focus {
    background: #E74B37;
  }
  `
}

const Icon = props => {
  return <Wrapper>
    {props.children}
  </Wrapper>
}

Icon.propTypes = {
  name: PropTypes.oneOf(['Facebook', 'Google'])
}
Icon.Wrapper = Wrapper

export default Icon
