// https://www.sliderrevolution.com/resources/css-hamburger-menu/#:~:text=Start%20Designing-,CSS%20hamburger%20menus,-Author%3A%20rosalieelphick
import { Box, useColorModeValue } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Hamburger = styled.div`
  width: 25px;
  height: 20px;
  position: relative;
`

const Bar = styled.span`
  padding: 0;
  width: 25px;
  height: 2px;
  display: block;
  border-radius: 4px;
  transition: all 0.25s ease-in-out;
  position: absolute;
`
const Bar1 = styled(Bar)`
  top: 0;
  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
      transform: translateX(40px);
    `}
`

const Bar2 = styled(Bar)`
  top: 9px;
  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
      transform: rotate(45deg);
    `}
`

const Bar3 = styled(Bar)`
  top: 9px;
  right: 0;
  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
      transform: rotate(-45deg);
    `}
`
const Bar4 = styled(Bar)`
  bottom: 0;
  ${({ isOpen }: { isOpen: boolean }) =>
    isOpen &&
    css`
      transform: translateX(-40px);
    `}
`
const MenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  const barColor = useColorModeValue('gray.700', 'gray.200')
  return (
    <Hamburger onClick={onClick}>
      <Box as={Bar1} isOpen={isOpen} bg={isOpen ? undefined : barColor} />
      <Box as={Bar2} isOpen={isOpen} bg={barColor} />
      <Box as={Bar3} isOpen={isOpen} bg={barColor} />
      <Box as={Bar4} isOpen={isOpen} bg={isOpen ? undefined : barColor} />
    </Hamburger>
  )
}

export default MenuButton
