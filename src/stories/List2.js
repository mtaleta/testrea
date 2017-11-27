import React from 'react'
import { storiesOf } from '@storybook/react'
import List2 from '../components/List2/index'

const { List, Ul, Li, Item, Time, Text } = List2

const stories = storiesOf('List2', module)

stories.add('Main', () => <List>
  <Ul>
    <Li>
      <Item>
        <Time>Today at 1:17 PM</Time>
        <Text>yoooooo</Text>
      </Item>
    </Li>
    <Li>
      <Item>
        <Time>Today at 2:17 PM</Time>
        <Text>wwwww</Text>
      </Item>
    </Li>
  </Ul>
</List>
)
