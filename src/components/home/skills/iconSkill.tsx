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
import { IconType } from 'react-icons'

import MotionBox from '@/components/common/motionBox'

type IconSkillType = {
  icon: IconType
  skills: string[]
  modalTitle: string
}

const IconSkill = (props: IconSkillType) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { icon, skills, modalTitle } = props
  return (
    <Box>
      <MotionBox
        _hover={{ cursor: 'pointer' }}
        boxSize='50px'
        whileHover={{ opacity: 0.8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Icon as={icon} w='100%' h='100%' onClick={onOpen} />
      </MotionBox>

      <Modal isCentered onClose={onClose} isOpen={isOpen} size='sm'>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(5px) hue-rotate(-30deg)' />
        <ModalContent>
          <MotionBox
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.2 }}
          >
            <ModalHeader fontSize='md' mt={2}>
              {modalTitle}
            </ModalHeader>
            <ModalCloseButton mr={3} mt={2} />
            <ModalBody>
              <Grid gridTemplateColumns='repeat(2,1fr)' gap={3}>
                {skills.map((data) => (
                  <GridItem key={data}>
                    <Text variant='skill'>{data}</Text>
                  </GridItem>
                ))}
              </Grid>
            </ModalBody>
            <ModalFooter />
          </MotionBox>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default IconSkill
