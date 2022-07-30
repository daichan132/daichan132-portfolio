import { Flex, useColorMode, Box } from '@chakra-ui/react'

import MotionBox from '@/components/common/motionBox'
import WavyText from '@/components/common/wavyText'

const Title = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex justify='center' align='center' position='relative' py={5}>
      <MotionBox
        zIndex={1}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 50, bounceDamping: 2 }}
        dragElastic={0.1}
      >
        <Flex justify='center' align='center'>
          {/* outline */}
          <MotionBox
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
            height='210px'
            width='210px'
            border='solid 2px'
            borderRadius='100%'
            zIndex={3}
            color={colorMode === 'light' ? 'gray.50' : 'gray.900'}
          />

          {/* title */}
          <Box position='absolute' zIndex={2} fontSize='xl' fontWeight='bold'>
            <WavyText text='daichan132' delay={0.5} />
          </Box>

          {/* innerCircle */}
          <Box position='absolute'>
            <Flex
              height='200px'
              width='200px'
              bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
              borderRadius='100%'
            />
          </Box>
        </Flex>
      </MotionBox>
      {/* bgCirle */}
      <MotionBox
        position='absolute'
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1.7,
        }}
      >
        <Flex
          height='230px'
          width='230px'
          bg={colorMode === 'light' ? 'gray.900' : 'gray.100'}
          borderRadius='100%'
        />
      </MotionBox>
    </Flex>
  )
}

export default Title
