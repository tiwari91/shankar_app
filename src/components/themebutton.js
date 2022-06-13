import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      arial-label="Toggle theme"
      colorScheme={useColorModeValue('green', 'yellow')}
      icon={useColorModeValue(<MoonIcon></MoonIcon>, <SunIcon></SunIcon>)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeButton
