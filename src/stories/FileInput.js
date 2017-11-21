import React from 'react'
import { storiesOf } from '@storybook/react'
import FileInput from '../components/FileInput/index'
import styled from 'styled-components'

const stories = storiesOf('FileInput', module)

const Avatar = styled.img`
border-radius: 50%;
`

class Page extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      previewImage: null
    }
  }

  render () {
    const { previewImage } = this.state
    return <div>
      <FileInput
      //   handleChange={image => {
      //   this.setState(state => ({...state, previewImage: image}))
      // }}
        onChange={event => this.setState(state => ({...state, previewImage: previewImage}))}
        >選擇檔案</FileInput>
      <div>
        <h2>Preview</h2>
        <Avatar src={previewImage} />
      </div>
    </div>
  }
}

stories.add('Main', () => {
  return <Page />
})

// stories.add('Main', () => <div>
//   <FileInput>選擇檔案</FileInput>
// </div>
// )
