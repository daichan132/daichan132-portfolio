import { LinkProps, useColorModeValue } from '@chakra-ui/react'

import ChakraNextLink from '@/components/common/chakraNextLink'
import MotionBox from '@/components/common/motionBox'

type NavLinkProps = {
  href: string
  path: string
  target?: string
  children: React.ReactNode
}

const NavLink = (props: NavLinkProps & LinkProps) => {
  const { href, path, target, children, ...rest } = props
  const active = path === href
  const activateColor = useColorModeValue('teal.700', 'blue.200')
  return (
    <MotionBox whileHover={{ opacity: 0.8, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <ChakraNextLink
        href={href}
        target={target}
        py={1}
        px={4}
        color={active ? activateColor : undefined}
        textDecoration={active ? 'underline' : undefined}
        textDecorationColor={active ? activateColor : undefined}
        textUnderlineOffset='3px'
        textDecorationThickness='2px'
        {...rest}
      >
        {children}
      </ChakraNextLink>
    </MotionBox>
  )
}

NavLink.defaultProps = {
  target: '',
}

export default NavLink
