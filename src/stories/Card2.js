import React from 'react'
import { storiesOf } from '@storybook/react'
import Card2 from '../components/Card2.js/index'
import FontAwesome from 'react-fontawesome'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const stories = storiesOf('Card2', module)
const { CardButton, CardDes, CardImg,
  CardInfo, Cards, CardTitle,
  CardCircle, Repo, Demo } = Card2
const bgStyle = {backgroundImage: `URL("${'https://i.imgur.com/jdMHS9t.gif'}")`}
  
stories.add('Main', () => <div>
  <Cards>
    <CardImg style={bgStyle} />
    <CardInfo>
      <CardTitle>123123</CardTitle>
      <CardDes>嘿嘿嘿</CardDes>
      <CardButton>
        <a title='Demo' rel='noopener noreferrer' target='_blank'>
          <CardCircle>
            <Repo>
              <FontAwesome name='laptop' />
            </Repo>
          </CardCircle>
        </a>
        <a title='Github' rel='noopener noreferrer' target='_blank'>
          <CardCircle>
            <Demo>
              <FontAwesome name='github-alt' />
            </Demo>
          </CardCircle>
        </a>
      </CardButton>
    </CardInfo>
  </Cards>
</div>
)
