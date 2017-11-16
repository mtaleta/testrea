import React from 'react'
import { storiesOf } from '@storybook/react'
import Loading from '../components/Loading/index'

const stories = storiesOf('Loading', module)

const {
  Wrapper,
  AnimalLoading,
  LoadingContainer,
  LoadText, AnimalCircle,
  LoadingCircle,
  Round,
  CircleOne,
  CircleTwo
  // LoadingCircleGradient,
  // Mask
} = Loading

stories.add('Main', () => <Wrapper>
  <AnimalLoading>
    <LoadingContainer>
      <LoadText>loading</LoadText>
    </LoadingContainer>
  </AnimalLoading>
  <p />
  <AnimalCircle>
    <LoadingContainer>
      <LoadingCircle />
    </LoadingContainer>
  </AnimalCircle>
  <p />
  <Round>
    <LoadingContainer>
      <CircleOne />
      <CircleTwo />
    </LoadingContainer>
  </Round>
</Wrapper>
)
