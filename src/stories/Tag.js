import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../components/Tag/index'

const stories = storiesOf('Tag', module)

const { Footers, Count, Ul, Li, Choose, Clean } = Tag

stories.add('Main', () => <div>
  <Footers>
    <Ul>
      <Li>
        <Count> Count</Count>
      </Li>
      <Li>
        <Choose href='#'>All</Choose>
      </Li>
      <Li>
        <Choose href='#'>Active</Choose>
      </Li>
      <Li>
        <Choose href='#'>Complete</Choose>
      </Li>
      <Li>
        <Clean>Clean complete</Clean>
      </Li>
    </Ul>
  </Footers>
</div>
)
