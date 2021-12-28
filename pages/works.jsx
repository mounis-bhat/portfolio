import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"

import Section from "../components/Section"
import { WorkGridItem } from "../components/GridItem"

import thumbnailNoqod from "../public/images/works/Noqod.png"

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="noqod"
            title="Noqod Admin Panel"
            thumbnail={thumbnailNoqod}
          >
            Noqod Admin Panel is a web application for managing Noqod platform.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="noqod"
            title="Noqod Merchant"
            thumbnail={thumbnailNoqod}
          >
            Noqod Merchant provides a platform for merchants to manage thier
            account and transactions.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="noqod"
            title="Noqod Backend"
            thumbnail={thumbnailNoqod}
          >
            Noqod backend is a fastify server that handles all the requests from
            the frontend.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
