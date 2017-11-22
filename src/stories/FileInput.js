import React from 'react'
import { storiesOf } from '@storybook/react'
import FileInput from '../components/FileInput/index'

const stories = storiesOf('FileInput', module)

stories.add('Main', () => <div>
  <FileInput>選擇檔案</FileInput>
</div>
)
