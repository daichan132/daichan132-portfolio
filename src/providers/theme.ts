import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  colors: {},
  styles: {
    global: {
      body: {
        fontFamily: 'Noto Sans JP, sans-serif',
      },
    },
  },
  components: {
    Heading: {
      variants: {
        sectionTitle: (props: StyleFunctionProps) => ({
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: props.colorMode === 'light' ? 'teal.500' : 'blue.200',
          py: 2,
          px: 1,
        }),
      },
    },
    Text: {
      variants: {
        callout: (props: StyleFunctionProps) => ({
          textAlign: 'center',
          bg: props.colorMode === 'light' ? 'gray.100' : 'gray.700',
          borderRadius: 'lg',
          fontWeight: 'bold',
          py: 3,
        }),
        skill: (props: StyleFunctionProps) => ({
          py: 2,
          border: 'solid 1px',
          textAlign: 'center',
          color: props.colorMode === 'light' ? 'teal.600' : 'blue.200',
          fontSize: 'sm',
        }),
      },
    },
  },
})

export default theme
