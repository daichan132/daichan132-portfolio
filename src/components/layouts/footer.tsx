import { Box, Container, HStack, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

import ChakraNextLink from '@/components/common/chakraNextLink'

const Footer = () => (
  <Box position='absolute' w='100%' bottom='0'>
    <Container
      as={Stack}
      maxW='container.md'
      py={4}
      px={7}
      direction='row'
      spacing={4}
      justify='space-between'
      align='center'
    >
      <Text>© 2022 daichan132</Text>
      <HStack spacing={6}>
        <ChakraNextLink href='https://github.com/daichan132' target='_blank'>
          <HStack as={motion.button} whileTap={{ scale: 0.9 }}>
            <FaGithub size='25px' aria-label='github icon' />
          </HStack>
        </ChakraNextLink>
      </HStack>
    </Container>
  </Box>
)

export default Footer
