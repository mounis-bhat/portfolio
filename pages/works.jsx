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
          <WorkGridItem id="noqod" title="Noqod" thumbnail={thumbnailNoqod}>
            Noqod is a service provider instituted with an impetus of
            revolutionalising digital payment process in MENA
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
