import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F3F0EB', '#202023')(props)
    }
  })
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const theme = extendTheme({
  styles,
  fonts
})

export default theme
