import NextLink from "next/link"
import {
  Box,
  Icon,
  List,
  Link,
  Image,
  Button,
  Heading,
  ListItem,
  Container,
  useColorModeValue
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram
} from "react-icons/io5"

import Section from "../components/Section"
import Paragraph from "../components/Paragraph"
import Article from "../components/layouts/Article"
import { BioSection, BioYear } from "../components/Bio"

const index = () => {
  return (
    <Article>
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
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            // ml={{ md: 6 }}
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
          <Box flexGrow={1} align="center" mb={6}>
            <Heading as="h2" variant="page-title">
              Mounis Bhat
            </Heading>
            <p>Full-stack Developer / Digital Artist</p>
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
            efficient code.{<br />} I primarily code in JavaScript and I am
            proficient in React, Node.js, Fastify, Postgress and Firebase. Other
            technologies I use are Dart, Python and C#.{<br />} In addition to
            that, I am a Digital Artist and I love to create art and
            illustrations.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>19**</BioYear>
            Born in Srinagar, Kashmir.
          </BioSection>
          <BioSection>
            <BioYear>20**</BioYear>
            Worked as a Freelance designer at{" "}
            <Link href="https://www.fiverr.com/mounis_">Fiverr </Link>
          </BioSection>
          <BioSection>
            <BioYear>20**</BioYear>
            Graduated from{" "}
            <Link href="https://www.cuchd.in/">Chandigarh University </Link>
          </BioSection>
          <BioSection>
            <BioYear>20**</BioYear>
            Working full-time at{" "}
            {<Link href="https://www.noqod.com.sd/">Noqod.</Link>}
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://instagram.com/mounis_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @mounis_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/mounis_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @mounis_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/mounis-bhat" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @mounis-bhat
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/mounis-bhat/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @mounis-bhat
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="center" my={4}>
            <NextLink href="posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Posts
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            Art, Photography, Design, Singing, Technology, Travel, Hiking
          </Paragraph>
        </Section>
      </Container>
    </Article>
  )
}

export default index
