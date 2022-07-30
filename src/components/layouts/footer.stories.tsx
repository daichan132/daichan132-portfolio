import React from 'react'

import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Footer from './footer'

export default {
  title: 'Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <Box height='80px' position='relative'>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Home = Template.bind({})
