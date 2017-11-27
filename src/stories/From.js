import React from 'react'
import { storiesOf } from '@storybook/react'
import From from '../components/From/index'
import List2 from '../components/List2/index'

const stories = storiesOf('From', module)
const { List, Ul, Li, Item, Time, Text } = List2

const { Wrapper, Texts, Button } = From

stories.add('Main', () => <div>
  <Wrapper>
    <Texts placeholder="What's on your mind?" />
    <Button>Post</Button>
  </Wrapper>
  <List>
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
</div>
)
