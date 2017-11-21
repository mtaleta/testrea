import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Buttons/index'

const stories = storiesOf('Button', module)

stories.add('Main', () => <div>
  <Button>yaaa</Button>
  <Button size='max'>max</Button>
  <Button size='standard'>max</Button>
  <Button size='small'>max</Button>
</div>
)
