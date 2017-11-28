import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '../components/Card/index'
import FontAwesome from 'react-fontawesome'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const stories = storiesOf('Card', module)
const { Cards, Bgimg, CardInfo, Title, Buttons
  , Demo, Circle, Repo, Des } = Card
const bgStyle = {backgroundImage: `URL("${'https://i.imgur.com/jdMHS9t.gif'}")`}
stories.add('Main', () => <div>
  <Cards>
    <Bgimg title='Demo' style={bgStyle} />
    <Buttons>
      <a title='Github' href={'https://reactmaker.github.io/react_challenge_1to50/#/'} rel='noopener noreferrer' target='_blank'>
        <Circle>
          <Demo>
            <FontAwesome name='info' />
          </Demo>
        </Circle>
      </a>
      <a href={'https://reactmaker.github.io/react_challenge_1to50/#/'} rel='noopener noreferrer' target='_blank'>
        <Circle>
          <Repo>
            <FontAwesome name='github-alt' />
          </Repo>
        </Circle>
      </a>
    </Buttons>
    <CardInfo>
      <Title>123123</Title>
      <Des>嘿嘿嘿</Des>
    </CardInfo>
  </Cards>
</div>
)
