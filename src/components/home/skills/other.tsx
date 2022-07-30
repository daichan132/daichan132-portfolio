import {
  Box,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Grid,
  GridItem,
  ModalFooter,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaRegSquare } from 'react-icons/fa'

import MotionBox from '@/components/common/motionBox'

const OtherIcon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <MotionBox
        _hover={{ cursor: 'pointer' }}
        boxSize='50px'
        whileHover={{ opacity: 0.8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Icon as={FaRegSquare} w='100%' h='100%' onClick={onOpen} />
      </MotionBox>

      <Modal isCentered onClose={onClose} isOpen={isOpen} size='sm'>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(5px) hue-rotate(-30deg)' />
        <ModalContent>
          <motion.article
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={{
              hidden: { opacity: 0, x: 40 },
              enter: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 40 },
            }}
            transition={{ duration: 0.2 }}
            style={{ position: 'relative' }}
          >
            <ModalHeader fontSize='md' fontWeight='normal' mt={2}>
              Other Skills
            </ModalHeader>
            <ModalCloseButton mr={3} mt={2} />
            <ModalBody>
              <Grid gridTemplateColumns='repeat(2,1fr)' gap={3}>
                <GridItem>
                  <Text variant='skill'>Docker</Text>
                </GridItem>
                <GridItem>
                  <Text variant='skill'>Git</Text>
                </GridItem>
              </Grid>
            </ModalBody>
            <ModalFooter />
          </motion.article>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default OtherIcon