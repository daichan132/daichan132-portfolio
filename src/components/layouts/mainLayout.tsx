import { Box, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'

import Article from './article'
import Footer from './footer'
import Navbar from './navbar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const mainBgColor = useColorModeValue('#ffffff', '#20202380')

  return (
    <Box as='main' position='relative' minHeight='100vh' bgColor={mainBgColor}>
      <Head>
        <meta name='description' content="daichan132's portfolio" />
        <meta name='author' content='daichan132' />
        <title>daichan132</title>
      </Head>
      <Navbar />
      <Article>{children}</Article>
      <Footer />
    </Box>
  )
}

export default MainLayout
