import React from 'react'
import { storiesOf } from '@storybook/react'
import Group from '../components/Group/index'

const stories = storiesOf('Group', module)

const {Span, Input} = Group

stories.add('Main', () => <div>
  <Group test={123}>
    <Span size='max'>@</Span>
    <Input placeholder='Username' size='max' />
  </Group>
  <br />

  <Group>
    <Span>@</Span>
    <Input placeholder='Username' />
  </Group>
  <br />
  <Group>
    <Span size='small'>@</Span>
    <Input placeholder='Username' size='small' />
  </Group>
</div>
)
