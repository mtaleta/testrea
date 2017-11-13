import React from 'react'
import { storiesOf } from '@storybook/react'
import Badges from '../components/Badges/index'

const stories = storiesOf('Badges', module)

const { Wrapper, Span } = Badges

stories.add('Main', () => <div>
  <Wrapper>Message
    <Span>2</Span>
  </Wrapper>
</div>
)
