import { Stack } from '@chakra-ui/react'

import Biography from '@/components/home/biography'
import Skills from '@/components/home/skills'
import Title from '@/components/home/title'

const Home = () => (
  <Stack spacing={{ base: 2, md: 5 }}>
    <Title />
    <Biography />
    <Skills />
  </Stack>
)

export default Home
