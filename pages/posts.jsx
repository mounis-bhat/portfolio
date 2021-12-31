import NextLink from "next/link"
import {
  Container,
  Heading,
  List,
  ListItem,
  Button,
  Icon,
  Divider,
  useColorModeValue
} from "@chakra-ui/react"
import { IoLogoVercel } from "react-icons/io5"

import Section from "../components/Section"

const Works = () => {
  return (
    <Container>
      <Container>
        <Heading
          as="h3"
          fontSize={30}
          mb={10}
          mt={10}
          align="center"
          variant="section-title"
        >
          Posts
        </Heading>
      </Container>
      <Section delay={0.1}>
        <List>
          <ListItem my="25px">
            <NextLink href="posts/swc" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoVercel} />}
                fontSize="20px"
              >
                Failed to load SWC binary, Next JS
              </Button>
            </NextLink>
          </ListItem>
          <Divider />
        </List>
      </Section>
    </Container>
  )
}

export default Works
