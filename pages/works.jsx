import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"

import Article from "../components/layouts/Article"
import Section from "../components/Section"
import { WorkGridItem } from "../components/GridItem"

import thumbnailNoqod from "../public/images/works/Noqod.png"
import thumbnailPortofolio from "../public/images/works/Logo.png"

const Works = () => {
  return (
    <Article>
      <Container>
        <Heading as="h3" fontSize={30} mb={10} mt={10} align="center">
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={16}>
          <Section delay={0.1}>
            <WorkGridItem id="noqod" title="Noqod" thumbnail={thumbnailNoqod}>
              Noqod is a service provider instituted with an impetus of
              revolutionalising digital payment process in MENA
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="portfolio"
              title="Personal Portfolio"
              thumbnail={thumbnailPortofolio}
            >
              An application that gives you a glimpse of my work and skills
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Article>
  )
}

export default Works
