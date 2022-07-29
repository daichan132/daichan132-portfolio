import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme'

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

export default AppProvider
