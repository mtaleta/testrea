import React from 'react'
import { storiesOf } from '@storybook/react'
import AnimationSnow from '../components/Animation_Snow/index'

const stories = storiesOf('AnimationSnow', module)
const {Body, Snow} = AnimationSnow

stories.add('Main', () => <Body>
  <Snow />
</Body>
)
