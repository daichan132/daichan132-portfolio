import { useEffect, useRef, useState } from 'react'

import {
  Container,
  Box,
  useColorModeValue,
  Spacer,
  useColorMode,
  HStack,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import ColorToggleButton from './elements/colorToggleButton'
import DogFootprintButton from './elements/dogFootprintButton'
import MenuButton from './elements/menuButton'
import NavLink from './elements/navLink'

const Navbar = () => {
  /* --------------------------- chakra uiのcolorの設定 --------------------------- */
  const { colorMode } = useColorMode()
  const bgColor = useColorModeValue('#ffffffd0', '#202023d0')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  /* -------------------------------- routeの設定 -------------------------------- */
  const router = useRouter()
  const path = router.pathname
  /* ---------------------------- Dropdown Menuの設定 ---------------------------- */
  const isBreakpoint = useBreakpointValue({ base: true, md: false })
  const [isOpenMenu, setOpenMenu] = useState(!isBreakpoint)
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // Breakpointでmenuを閉じる
    setOpenMenu(false)
  }, [isBreakpoint])
  useEffect(() => {
    // navbarの枠外をクリックしたらmenuを閉じる
    const el = menuRef.current
    if (!el) return
    const hundleClickOutside = (e: MouseEvent) => {
      if (!el?.contains(e.target as Node)) {
        setOpenMenu(false)
      }
    }
    document.addEventListener('click', hundleClickOutside)
    // eslint-disable-next-line consistent-return
    return () => document.removeEventListener('click', hundleClickOutside)
  }, [menuRef])

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={bgColor}
      zIndex={5}
      css={{ backdropFilter: 'blur(10px)' }}
      ref={menuRef}
      borderBottomWidth={1}
      borderStyle='solid'
      borderColor={borderColor}
    >
      <Container
        display='flex'
        h='100%'
        maxW='container.md'
        alignItems='center'
        pr={7}
        pl={5}
        height='70px'
      >
        <DogFootprintButton colorMode={colorMode} />
        <Spacer />

        <Box display={{ base: 'none', md: 'inline-block' }}>
          <NavLink href='/' path={path} fontWeight='bold'>
            Home
          </NavLink>
          <NavLink
            href='/portfolio'
            path={path}
            fontWeight='bold'
            onClick={() => setOpenMenu(!isOpenMenu)}
          >
            Portfolio
          </NavLink>
        </Box>

        <HStack display={{ base: 'inline-block', md: 'none' }}>
          <MenuButton isOpen={isOpenMenu} onClick={() => setOpenMenu(!isOpenMenu)} />
        </HStack>
        <Spacer />
        <ColorToggleButton />
      </Container>
      {isOpenMenu && isBreakpoint ? (
        <motion.div
          initial={{ opacity: 0, y: '-20%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <VStack pb={5} spacing={3}>
            <NavLink
              href='/'
              path={path}
              fontWeight='bold'
              onClick={() => setOpenMenu(!isOpenMenu)}
            >
              Home
            </NavLink>
            <NavLink
              href='/portfolio'
              path={path}
              fontWeight='bold'
              onClick={() => setOpenMenu(!isOpenMenu)}
            >
              Portfolio
            </NavLink>
          </VStack>
        </motion.div>
      ) : (
        <Box />
      )}
    </Box>
  )
}

export default Navbar
