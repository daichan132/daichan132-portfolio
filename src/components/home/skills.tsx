import { Box, Heading, HStack } from '@chakra-ui/react'

import PythonIcon from './skills/pythonIcon'
import ReactIcon from './skills/reactIcon'

const Skills = () => (
  <Box>
    <Heading variant='sectionTitle' fontSize='xl'>
      Skills
    </Heading>
    <HStack py={5} spacing={6} px={3}>
      <ReactIcon />
      <PythonIcon />
    </HStack>
  </Box>
)

export default Skills
