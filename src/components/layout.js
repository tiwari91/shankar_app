import { VStack } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/react'
import Header from './header'

function layout({ component }) {
  return (
    <VStack p={1}>
      <Header></Header>
      <Container maxW="container.md" pt={20}>
        {component}
      </Container>
    </VStack>
  )
}

export default layout
