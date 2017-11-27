import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  padding: 1rem;
  flex-direction: row !important;
  background-color: #d1ecf1;
  border-color: #bee5eb;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-sizing: border-box;
  display: flex;
`

const Texts = styled.textarea`
  margin: 0 0.5rem 0 0;
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  overflow: auto;
  resize: vertical;
  flex: 1;
`

const Button = styled.button`
  -webkit-appearance: button;
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
`
const From = props => {
  return <Wrapper>
    <Texts />
    <Button />
  </Wrapper>
}

From.Wrapper = Wrapper
From.Texts = Texts
From.Button = Button

export default From
