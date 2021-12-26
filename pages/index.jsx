import { Container, Box, Heading } from "@chakra-ui/react"

const index = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="gray.400" p={3} mb={6} align="center">
        Hey there! I'm a software engineer working in the web industry.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mounis Bhat
          </Heading>
          <p>Developer / Digital Artist</p>
        </Box>
      </Box>
    </Container>
  )
}

export default index
