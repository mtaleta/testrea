import React from 'react'
import { storiesOf } from '@storybook/react'
import Circle from '../components/Circle/index'

const stories = storiesOf('Circle', module)

const {Wrapper, Space,
  Hole1,
  Hole2,
  Hole3,
  Hole4,
  Moon,
  Red,
  Yellow,
  Trace1,
  Trace2 } = Circle

stories.add('Main', () => <Wrapper>
  <Space />
  <Moon>
    <Hole1 />
    <Hole2 />
    <Hole3 />
    <Hole4 />
  </Moon>
  <Red />
  <Yellow />
  <Trace1 />
  <Trace2 />
</Wrapper>
)

let time = 0
const stars = [
  {
    el: 'Red',
    r: 280,
    speed: 0.2,
    width: 50
  },
  {
    el: 'Yellow',
    r: 340,
    speed: 0.5,
    width: 70
  }
]
function update () {
  stars.forEach(function (star) {
    const r = star.r
    const angle = star.speed * time * 2
    const x = r * Math.cos((angle / 360) * ((Math.PI * 2))) - star.width / 2
    const y = r * Math.sin((angle / 360) * ((Math.PI * 2))) - star.width / 2
    $(star.el).css('transform', 'translate(' + x + 'px,' + y + 'px)')
    time += 1
  })
}

setInterval(update, 30)
