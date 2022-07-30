import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Title from './title'

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = () => <Title />

export const Home = Template.bind({})
