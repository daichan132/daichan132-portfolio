import { LinkProps, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import ChakraNextLink from '@/components/common/chakraNextLink'

type NavLinkProps = {
  href: string
  path: string
  target?: string
  children: React.ReactNode
}

const NavLink = (props: NavLinkProps & LinkProps) => {
  const { href, path, target, children, ...rest } = props
  const active = path === href
  const activateColor = useColorModeValue('teal.600', 'blue.200')
  return (
    <motion.button whileHover={{ opacity: 0.8, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <ChakraNextLink
        href={href}
        target={target}
        py={1}
        px={4}
        color={active ? activateColor : undefined}
        textDecoration={active ? 'underline' : undefined}
        textDecorationColor={active ? activateColor : undefined}
        textUnderlineOffset='3px'
        textDecorationThickness='1px'
        {...rest}
      >
        {children}
      </ChakraNextLink>
    </motion.button>
  )
}

NavLink.defaultProps = {
  target: '',
}

export default NavLink
