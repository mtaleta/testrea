import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '../components/List/index'

const { Ul, Li } = List

const stories = storiesOf('List', module)

stories.add('Main', () => <Ul>
  <Li>yooo</Li>
  <Li>yaaaa</Li>
</Ul>
)
