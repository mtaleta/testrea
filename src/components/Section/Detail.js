import React, { Component } from 'react'
import styled from 'styled-components'

const Detail = styled.div`
  width: 100%;
  height: calc(~"100vh - 40px");
  background: red;
  overflow: auto;
`

export default class DetailPage extends Component {
  render () {
    return (
      <Detail>
        <p>12deeeee</p>
      </Detail>
    )
  }
}
