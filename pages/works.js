import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSmartq from '../public/images/works/smartq_eyecatch.png'
import thumbZelfa100 from '../public/images/works/zelfa100_eyecatch.png'

const Works = () => {
  console.log(thumbSmartq)
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="smartq" title="SmartQ" thumbnail={thumbSmartq}>
              A cloud based Queue Management System (SaaS) that help businesses
              manage their customer flow efficiently within their locations.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Learning Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="zelfa100"
              thumbnail={thumbZelfa100}
              title="zelfa100daysofcode"
            >
              A list of 8 projects made using HTML, CSS, and Vanilla JS.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
