import React from 'react'

import { Box } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import WavyText from './wavyText'

export default {
  title: 'WavyText',
  component: WavyText,
  decorators: [
    (Story) => (
      <Box height='80px' position='relative'>
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof WavyText>

const Template: ComponentStory<typeof WavyText> = (args) => <WavyText {...args} />

export const daichan132 = Template.bind({})
daichan132.args = {
  text: 'daichan132',
}

export const delay1s = Template.bind({})
delay1s.args = {
  delay: 1,
  text: 'delay1s',
}

export const duration1s = Template.bind({})
duration1s.args = {
  duration: 1,
  text: 'duration1s',
}
