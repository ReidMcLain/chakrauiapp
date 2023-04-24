import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import dashboard from './dashboard'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>

  )
}

export default MyApp
