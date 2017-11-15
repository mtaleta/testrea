import React from 'react'
import { storiesOf } from '@storybook/react'
import Title from '../components/Title/index'

const stories = storiesOf('Title', module)

const { Text } = Title

stories.add('Main', () => <div>
    <Text>TODOs</Text>
</div>
)
