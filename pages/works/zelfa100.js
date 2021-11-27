import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="zelfa100daysofcode">
    <Container>
      <Title>
        zelfa100daysofcode <Badge>2020</Badge>
      </Title>
      <P>My Contribution to the 100 Days of code Challenge.</P>
      <P>
        This Website as well as the following{' '}
        <Link
          href="https://github.com/ramzizelfani/100_Days_Of_Code/"
          target="_blank"
        >
          Github Repo <ExternalLinkIcon mx="2px" />
        </Link>
        will track my journey with the{' '}
        <Link href="https://www.100daysofcode.com/" target="_blank">
          #100DaysOfCode challenge
          <ExternalLinkIcon mx="2px" />
        </Link>
        . I will be committing to the repository and updating this website in
        order to keep you in track with my journey through learning modern web
        development from the bottom up. I will start with basics like HTML5 and
        CSS3 concepts and I will keep going till mastering modern Frameworks and
        Development Stacks (React, Node, MERN, JAM, ES6+, ...). My palnning to
        reach the above goals will be based on the following{' '}
        <Link
          href="https://zelfa100daysofcode.netlify.app/html_css_masterclass/knowledge_resume/"
          target="_blank"
        >
          TIMELINE.
          <ExternalLinkIcon mx="2px" />
        </Link>
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.zelfa100daysofcode.netlify.app/">
            Zelfa100DaysOfCode <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML - CSS - JS</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/zelfa100_eyecatch.png"
        alt="zelfa100daysofcode"
      />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/zelfa100_01.png"
          alt="zelfa100daysofcode"
        />
        <WorkImage
          src="/images/works/zelfa100_02.png"
          alt="zelfa100daysofcode"
        />
      </SimpleGrid>
      <WorkImage src="/images/works/zelfa100_03.png" alt="zelfa100daysofcode" />
    </Container>
  </Layout>
)

export default Work
