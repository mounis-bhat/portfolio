import Head from "next/head"
import { Box, Container, useToast } from "@chakra-ui/react"
import { useEffect } from "react"

import Navbar from "../Navbar"

const Main = ({ children, router }) => {
  const toast = useToast()

  useEffect(() => {
    toast({
      title: "This website was developed in 2021",
      description: "It is outdated, the information is no longer accurate.",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top"
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Mounis Bhat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
