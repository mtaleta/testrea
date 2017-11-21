import styled from 'styled-components'
import React from 'react'

const BackgroundWrapper = styled.div`
  position: absolute;
  background-color: #aaa;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 10;
`

const Wrapper = styled.ul`
  font-size: 14px;
  padding:  20px 0 20px 0px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  & li {
    display: inline-block;
    padding: 0 10px;
    color: #909090;
  }

  & li:not(:last-child) {
    border-right: 1px solid #909090;
  }

  & a {
    color: #fff;
    text-decoration: none;
  }

  & a:hover, & a:visited {
    color: #909090;
  }

  & a:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const Footer = props => {
  return <BackgroundWrapper>
    <Wrapper>
      <li><a>123</a></li>
      <li><a>456</a></li>
    </Wrapper>
  </BackgroundWrapper>
}

export default Footer
