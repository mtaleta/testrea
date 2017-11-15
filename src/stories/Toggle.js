import React from 'react'
import { storiesOf } from '@storybook/react'
import Toggle from '../components/Toggle/index'

const stories = storiesOf('Toggle', module)

const { Wrapper, List } = Toggle

stories.add('Main', () => <div>
  <Wrapper>
    <List />
  </Wrapper>
</div>
)
