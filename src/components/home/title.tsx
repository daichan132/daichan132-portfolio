import { Flex, Heading, useColorMode, Text } from '@chakra-ui/react'

import MotionBox from '@/components/common/motionBox'

import ChakraNextImage from '../common/chakraNextImage'

const Title = () => {
  const { colorMode } = useColorMode()

  return (
    <MotionBox
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      dragSnapToOrigin
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
    >
      <Flex
        justify='center'
        align='center'
        flexDirection='column'
        position='relative'
        height='250px'
        mt={7}
      >
        {/* outlibe */}
        <MotionBox
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          height='210px'
          width='210px'
          border='solid 1px'
          borderRadius='100%'
          zIndex={3}
          bg='transparent'
          color={colorMode === 'light' ? 'teal.600' : 'blue.400'}
        />
        {/* title */}
        <MotionBox position='absolute' zIndex='2'>
          <Heading
            fontSize='2xl'
            bgGradient={
              colorMode === 'light'
                ? 'linear(to-l, teal.300, teal.100)'
                : 'linear(to-l, blue.400, blue.200)'
            }
            bgClip='text'
          >
            <Text>daichan132</Text>
          </Heading>
        </MotionBox>
        {/* image */}
        <MotionBox
          position='absolute'
          zIndex='1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
        >
          <ChakraNextImage
            src='/kyoto.jpg'
            alt='kyoto'
            height='200px'
            width='200px'
            borderRadius='100%'
            filter='auto'
            brightness={colorMode === 'light' ? '50%' : '40%'}
          />
        </MotionBox>
      </Flex>
    </MotionBox>
  )
}

export default Title
