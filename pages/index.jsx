import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from "@chakra-ui/react"

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
    </Container>
  )
}

export default index
