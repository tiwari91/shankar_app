import Layout from './layout'
import {
  Heading,
  Text,
  Box,
  Container,
  Divider,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const notfound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page not found.</Text>
      <Divider my={4} />
      <Box my={6} align="center">
        <Link href="/">
          <Button colorScheme={useColorModeValue('green', 'yellow')}>
            Return to home
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

const NotFound = () => {
  return <Layout component={notfound()} />
}

export default NotFound
