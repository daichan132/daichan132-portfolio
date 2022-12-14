// refer to https://dev.to/harshhhdev/create-a-satisfying-wavy-text-animation-with-framer-motion-3hb5
import { FC } from 'react'

import { motion, Variants, HTMLMotionProps } from 'framer-motion'

interface Props extends HTMLMotionProps<'div'> {
  text: string
  delay?: number
  duration?: number
}

const WavyText: FC<Props> = ({ text, delay, duration, ...props }: Props) => {
  const letters = Array.from(text)

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * (delay || 0) },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.h1
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial='hidden'
      animate='visible'
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={String(index) + letter} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}
WavyText.defaultProps = {
  delay: 0,
  duration: 0.05,
}

export default WavyText
