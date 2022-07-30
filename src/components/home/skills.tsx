import { Box, Heading, HStack } from '@chakra-ui/react'
import { FaReact, FaPython, FaRegSquare } from 'react-icons/fa'

import IconSkills from './skills/iconSkill'

const Skills = () => (
  <Box>
    <Heading variant='sectionTitle'>Skills</Heading>
    <HStack py={5} spacing={6} px={1}>
      <IconSkills
        icon={FaReact}
        skills={['Typescript', 'Redux Toolkit', 'Storybook', 'Nextjs', 'Chakra UI']}
        modalTitle='React Skills'
      />
      <IconSkills
        icon={FaPython}
        skills={['FastAPI', 'PyTorch', 'Hugging Face', 'Flask', 'Streamlit', 'pytest']}
        modalTitle='Python Skills'
      />
      <IconSkills icon={FaRegSquare} skills={['Git', 'Docker']} modalTitle='Other Skills' />
    </HStack>
  </Box>
)

export default Skills
