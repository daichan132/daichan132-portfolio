import { Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'

const ChakraNextImage = ({
  src,
  alt,
  ...rest
}: { src: string; alt: string } & Omit<BoxProps, 'as'>) => (
  <Box position='relative' overflow='hidden' {...rest}>
    <Image objectFit='cover' layout='fill' loading='lazy' src={src} alt={alt} />
  </Box>
)

export default ChakraNextImage
