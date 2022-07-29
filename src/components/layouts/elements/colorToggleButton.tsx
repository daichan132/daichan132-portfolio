import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const ColorToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{ opacity: 0, y: '-10%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '+10%' }}
        transition={{ duration: 0.3 }}
      >
        <IconButton
          aria-label='Toggle theme'
          colorScheme={useColorModeValue('gray', 'gray')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
          rounded='100'
          size='sm'
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ColorToggleButton
