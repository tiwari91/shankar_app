import { VStack } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/react'
import Header from './components/header'
import Profile from './components/profile'

function App() {
  return (
    <VStack p={1}>
      <Header></Header>
      <Container maxW="container.md" pt={12}>
        <Profile></Profile>
      </Container>
    </VStack>
  )
}

export default App
