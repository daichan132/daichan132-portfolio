import { Box, Button, Heading, HStack, Icon, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

import ChakraNextLink from '../common/chakraNextLink'

const SNSLinks = () => (
  <Box>
    <Heading variant='sectionTitle'>Links</Heading>
    <HStack py={5} spacing={6}>
      <ChakraNextLink
        href='https://github.com/daichan132'
        target='_blank'
        display='flex'
        alignItems='center'
      >
        <Button>
          <Icon as={FaGithub} w='20px' h='20px' />
          <Text pl={3}>@daichan132</Text>
        </Button>
      </ChakraNextLink>
    </HStack>
  </Box>
)

export default SNSLinks
