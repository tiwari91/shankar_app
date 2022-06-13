import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container,
  Box,
  useColorModeValue,
  Link,
  IconButton
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
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
        <Link as={RouterLink} _activeLink={{ fontWeight: 'bold' }} to="/">
          <IconButton
            arial-label="Home"
            icon={<StarIcon />}
            onClick={''}
          ></IconButton>
        </Link>
        <Box flex={1} align="right">
          <Link
            pr={10}
            as={RouterLink}
            _activeLink={{ fontWeight: 'bold' }}
            to="/post"
          >
            Post
          </Link>
          <ThemeButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
