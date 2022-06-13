import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  List,
  Link,
  Icon,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Section, About, Bio, Year } from '../components/style'

const Profile = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hey there, I&apos;m Shankar!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shankar Tiwari
          </Heading>
          <p>Code/Gym/Cryptos/Soccer</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          align="center"
          ml={{ md: 6 }}
        >
          <Image
            borderColor="whiteAlpha.800"
            maxWidth="100px"
            borderWidth={2}
            borderStyle="solid"
            display="inline-block"
            borderRadius="full"
            src="/images/st.jpg"
            alt="Profile Image"
          ></Image>
        </Box>
      </Box>

      <Section>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <About>
          I&apos;m a web developer with interest in learning about cryptos,
          investing. Currently living in Redlands, CA. I enjoy coding, working
          out, watching soccer, and reading books.
        </About>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Bio>
          <Year>1990</Year>
          Born in India.
        </Bio>
        <Bio>
          <Year>2012</Year>
          Completed Bachelor&apos;s in CS from Pune University.
        </Bio>
        <Bio>
          <Year>2013-2014</Year>
          Worked as a Full Stack Developer.
        </Bio>
        <Bio>
          <Year>2016</Year>
          Intern in Dreamworks Animation.
        </Bio>
        <Bio>
          <Year>2017</Year>
          Completed the Master&apos;s in CS from CSUF.
        </Bio>
        <Bio>
          <Year>2018 to present</Year>
          Working as a web dev.
        </Bio>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/tiwari91" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoGithub}></Icon>}
              >
                tiwari91
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/StMill33" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoTwitter}></Icon>}
              >
                StMill33
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/shankatiwari91/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoLogoLinkedin}></Icon>}
              >
                shankatiwari91
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default Profile
