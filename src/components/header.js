import React from 'react'
import { Container, Box, useColorModeValue } from '@chakra-ui/react'
import ThemeButton from './themebutton'

function Header() {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      boxShadow="md"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Box flex={1} align="right">
          <ThemeButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
