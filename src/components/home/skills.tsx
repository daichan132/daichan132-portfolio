import { Box, Heading, HStack } from '@chakra-ui/react'

import OtherIcon from './skills/other'
import PythonIcon from './skills/pythonIcon'
import ReactIcon from './skills/reactIcon'

const Skills = () => (
  <Box>
    <Heading variant='sectionTitle'>Skills</Heading>
    <HStack py={5} spacing={6} px={1}>
      <ReactIcon />
      <PythonIcon />
      <OtherIcon />
    </HStack>
  </Box>
)

export default Skills
