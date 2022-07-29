import { Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

type ChakraNextLinkProps = {
  href: string
  target?: string
  children: React.ReactNode
}

const ChakraNextLink = (props: ChakraNextLinkProps & LinkProps) => {
  const { href, target, children, ...rest } = props
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link target={target} {...rest}>
        {children}
      </Link>
    </NextLink>
  )
}

ChakraNextLink.defaultProps = {
  target: '',
}

export default ChakraNextLink
