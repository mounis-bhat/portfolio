import { ChakraProvider } from "@chakra-ui/react"
import Main from "../components/layouts/Main"

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  )
}

export default App
