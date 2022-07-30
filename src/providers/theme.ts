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
          borderBottomWidth: 2,
          borderStyle: 'solid',
          borderColor: props.colorMode === 'light' ? 'teal.800' : 'blue.200',
          fontSize: '2xl',
          fontWeight: 'normal',
          pb: 2,
        }),
      },
    },
    Text: {
      variants: {
        callout: (props: StyleFunctionProps) => ({
          textAlign: 'center',
          bg: props.colorMode === 'light' ? 'gray.200' : 'gray.700',
          borderRadius: 'lg',
          p: 3,
        }),
        skill: (props: StyleFunctionProps) => ({
          py: 2,
          border: 'solid 2px',
          textAlign: 'center',
          color: props.colorMode === 'light' ? 'teal.800' : 'blue.200',
        }),
      },
    },
    Table: {
      parts: ['td'],
      variants: {
        biography: {
          td: {
            fontSize: 'md',
          },
        },
      },
    },
  },
})

export default theme
