import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SmartQ">
    <Container>
      <Title>
        SmartQ <Badge>2021-</Badge>
      </Title>
      <P>
        A Cloud Based Queue Management System (SaaS) that helps businesses
        managing their customer flow efficiently and customers to join a service
        queue from anywhere.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.smartq.tk/">
            https://www.smartq.tk/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, ExpressJS, React</span>
        </ListItem>
        <ListItem>
          <Meta>Dashboard</Meta>
          <Link href="https://app.smart-q.tk/">
            A link to the MVP of the platform <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/smartq_01.png" alt="Smartq" />
      <WorkImage src="/images/works/smartq_02.png" alt="Smartq" />
    </Container>
  </Layout>
)

export default Work
