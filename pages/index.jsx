import NextLink from "next/link"
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

import Section from "../components/Section"
import Paragraph from "../components/Paragraph"

const index = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        mt={6}
        align="center"
      >
        Hey there! I'm a software engineer working in the web industry.
      </Box>

      <Box
      // display={{ md: "flex" }}
      >
        <Box flexGrow={1} align="center" mb={6}>
          <Heading as="h2" variant="page-title">
            Mounis Bhat
          </Heading>
          <p>Full-stack Developer / Digital Artist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="150px"
            display="inline-block"
            borderRadius="full"
            src="/images/mounis.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I'm a Full-stack Developer based in Kashmir, currently working at{" "}
          {<Link href="https://www.noqod.com.sd/">Noqod.</Link>} I have a
          passion for designing elegant user experience and writing clean and
          efficient code.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  )
}

export default index
