import ChakraNextImage from '@/components/common/chakraNextImage'
import ChakraNextLink from '@/components/common/chakraNextLink'
import MotionBox from '@/components/common/motionBox'

const DogFootprintButton = ({ colorMode }: { colorMode: string }) => (
  <ChakraNextLink href='/' style={{ textDecoration: 'none' }} as='div'>
    <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      {colorMode === 'light' ? (
        <ChakraNextImage
          src='/blackDogFootprint.svg'
          alt='blackDogFootprint'
          height='30px'
          width='30px'
        />
      ) : (
        <ChakraNextImage
          src='/whiteDogFootprint.svg'
          alt='whiteDogFootprint'
          height='30px'
          width='30px'
        />
      )}
    </MotionBox>
  </ChakraNextLink>
)

export default DogFootprintButton
