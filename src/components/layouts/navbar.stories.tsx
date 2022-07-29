// ButtonGroup.stories.ts|tsx

import React from 'react'

import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Navbar from './navbar'

export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <Box h='10vh' transform='scale(1)'>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

export const Home = Template.bind({})
Home.story = {
  parameters: {
    nextRouter: { pathname: '/' },
  },
}

export const Others = Template.bind({})
Others.story = {
  parameters: {
    nextRouter: { pathname: '/others' },
  },
}
