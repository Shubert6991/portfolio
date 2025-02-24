import { ColorModeProvider } from '@chakra-ui/color-mode'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

import Layout from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default Website
