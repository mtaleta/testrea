import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from '../components/Label/index'

const stories = storiesOf('Label', module)

const { Wrapper, List } = Label

stories.add('Main', () => <div>
  <Wrapper>
    <List>test,test</List>
  </Wrapper>
</div>
)
