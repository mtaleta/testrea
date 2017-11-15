import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../components/Tag/index'

const stories = storiesOf('Tag', module)

const { Wrapper, Ul, Li, A } = Tag

stories.add('Main', () => <div>
  <Wrapper>
    <Ul>
      <Li>
        <A href='#'>All</A>
      </Li>
      <Li>
        <A href='#'>Active</A>
      </Li>
      <Li>
        <A href='#'>Complete</A>
      </Li>
    </Ul>
  </Wrapper>
</div>
)
