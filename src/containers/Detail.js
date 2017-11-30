import React, { Component } from 'react'
import styled from 'styled-components'
import Title from '../containers/Menu'

const Detail = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #e8e9ea;
  color: #555;
  padding-bottom: 60px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: unset;
  align-items: center;
`

export default class DetailPage extends Component {
  render () {
    return (
      <Detail>
        <Title />
      </Detail>
    )
  }
}
