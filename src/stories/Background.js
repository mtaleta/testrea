import React from 'react'
import {storiesOf } from '@storybook/react'
import Background from '../components/Background/index'

const stories = storiesOf('Background', module)

const { Back } = Background

stories.add('Main', () => <div>
  <Back>123</Back>
</div>
)
