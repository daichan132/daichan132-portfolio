import { Container } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Article = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <AnimatePresence key={path} exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Container maxW='container.md' pt='70px' pb={20}>
          {children}
        </Container>
      </motion.div>
    </AnimatePresence>
  )
}

export default Article
