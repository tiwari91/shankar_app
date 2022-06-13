import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F3F0EB', '#202023')(props)
    }
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const theme = extendTheme({
  styles,
  config,
  fonts
})

export default theme
