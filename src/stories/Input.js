import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '../components/Input/index'

const stories = storiesOf('Input', module)

const { Wrapper, Edit } = Input

stories.add('Main', () => <div>
  <Wrapper>
    <Edit placeholder='What needs to be done?' />
  </Wrapper>
</div>
)
