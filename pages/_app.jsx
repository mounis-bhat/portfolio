import { ChakraProvider } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"

import theme from "../libs/theme"
import Fonts from "../components/Fonts"
import Main from "../components/layouts/Main"

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}

export default App
