import { Stack } from '@chakra-ui/react'

import Biography from '@/components/home/biography'
import Skills from '@/components/home/skills'
import SNSLinks from '@/components/home/snsLinks'

const Home = () => (
  <Stack>
    <Biography />
    <Skills />
    <SNSLinks />
  </Stack>
)

export default Home
