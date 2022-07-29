import { motion } from 'framer-motion'

import ChakraNextImage from '@/components/common/chakraNextImage'
import ChakraNextLink from '@/components/common/chakraNextLink'

const DogFootprintButton = ({ colorMode }: { colorMode: string }) => (
  <ChakraNextLink href='/' style={{ textDecoration: 'none' }} as='div'>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
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
    </motion.div>
  </ChakraNextLink>
)

export default DogFootprintButton
