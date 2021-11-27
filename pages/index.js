import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack JS developer based in Tunisia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ramzi Zelfani
          </Heading>
          <p>
            Software Engineer ( JS Enthusiast / Web Developer / IT Specialist )
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/ramzi.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a professional software engineer with many years of experience in
          the ICT sector, combined with a solid education and a strong ability
          to acquire new knowledge. I am able to work both in a team and
          independently. I have strong organizational skills and proven
          competencies in developing modern Full Stack web applications.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1986</BioYear>
          Born in Kasserine, Tunisia.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Graduated as a Telecommunication Engineer from the Tunisian Military
          Academy
        </BioSection>
        <BioSection>
          <BioYear>2011 - 2013</BioYear>
          Joined the Tunisian Army as Cybersecurity/Applied Cryptography
          Specialist
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Finished A Master&apos;s degree program in Information Systems from
          the Naval Postgraduate school - USA
        </BioSection>
        <BioSection>
          <BioYear>2015 - 2021</BioYear>
          Worked as an IT specialist and Software developer wothin the Tunisian
          MoD
        </BioSection>
        <BioSection>
          <BioYear>2021 - Now</BioYear>
          Works as a Freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          JS, Software development, Modern Web Technologies, Teddy Bears,
          Sports, Technical writing, knowledge sharing...
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ramzizelfani" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @ramzizelfani
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/RamzyZlaf" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @RamzyZlaf
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="linkedin.com/in/ramzi-zelfani-37906b78" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
