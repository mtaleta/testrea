import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '../components/Icon/index'

const stories = storiesOf('Icon', module)

const {Wrapper} = Icon

stories.add('Main', () => <div style={{'padding': '2em'}}>
  <Wrapper name='Facebook'>Login with Facebook</Wrapper>
  <Wrapper name='Google'>Login with Google</Wrapper>
</div>
)
