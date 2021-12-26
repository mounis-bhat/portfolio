import { ChakraProvider } from "@chakra-ui/react"
import Main from "../components/layouts/Main"
import theme from "../libs/theme"

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  )
}

export default App
