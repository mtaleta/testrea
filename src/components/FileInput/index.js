import styled from 'styled-components'
import React from 'react'
import randString from 'randomstring' // 產生亂數字符

const Wrapper = styled.div`
  position: flex;
  min-width: 144px;
`

const InputElement = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  z-index: -1;
`

const Label = styled.label`
  width: 100%
  background-color: #fff;
  border: solid 1px #999;
  color: #666;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    color: #444;
  }
`

function FileInput (props) {
  const {
    id = randString.generate(10),
    onChange: handleChange,
    accept = {}
  } = props
  return <Wrapper {...props}>
    <InputElement
      id={id}
      type='file'
      onChange={event => {
        if (handleChange) { handleChange(event) }
      }}
      accept={accept} />
    <Label htmlFor={id}>
      {props.children}
    </Label>
  </Wrapper>
}

FileInput.displayName = 'FileInput'

export default FileInput
