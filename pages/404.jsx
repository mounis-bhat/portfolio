import NextLink from "next/link"
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text,
  Center
} from "@chakra-ui/react"

const NotFound = () => {
  return (
    <Center h="80vh">
      <Container>
        <Heading as="h1">Not Found</Heading>
        <Text>The page you are looking for does not exist.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <NextLink href="/">
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </Container>
    </Center>
  )
}

export default NotFound
