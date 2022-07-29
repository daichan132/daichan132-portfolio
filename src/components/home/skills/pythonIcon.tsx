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
import { FaPython } from 'react-icons/fa'

const PythonIcon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Box
        _hover={{ cursor: 'pointer' }}
        boxSize='50px'
        as={motion.div}
        whileHover={{ opacity: 0.8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Icon as={FaPython} w='100%' h='100%' onClick={onOpen} />
      </Box>

      <Modal isCentered onClose={onClose} isOpen={isOpen} size='sm'>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(5px) hue-rotate(30deg)' />
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
              Python Skills
            </ModalHeader>
            <ModalCloseButton mr={3} mt={2} />
            <ModalBody>
              <Grid gridTemplateColumns='repeat(2,1fr)' gap={3}>
                <GridItem>
                  <Text variant='skill'>FastAPI</Text>
                </GridItem>
                <GridItem>
                  <Text variant='skill'>PyTorch</Text>
                </GridItem>
                <GridItem>
                  <Text variant='skill'>Hugging Face</Text>
                </GridItem>
                <GridItem>
                  <Text variant='skill'>Flask</Text>
                </GridItem>
                <GridItem>
                  <Text variant='skill'>Streamlit</Text>
                </GridItem>
                <GridItem>
                  <Text variant='skill'>pandas</Text>
                </GridItem>
                <GridItem>
                  <Text variant='skill'>pytest</Text>
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

export default PythonIcon
