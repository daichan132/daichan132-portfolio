import { Container } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Article = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <AnimatePresence key={path} onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Container maxW='container.md'>{children}</Container>
      </motion.article>
    </AnimatePresence>
  )
}

export default Article
