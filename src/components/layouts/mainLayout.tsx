import { Box, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'

import Title from '@/components/home/title'

import Article from './article'
import Footer from './footer'
import Navbar from './navbar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const mainBgColor = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box position='relative' minHeight='100vh' bgColor={mainBgColor}>
      <Head>
        <meta name='description' content="daichan132's portfolio" />
        <meta name='author' content='daichan132' />
        <title>daichan132</title>
      </Head>
      <Navbar />
      <Box pt='100px' pb={20}>
        <Title />
        <Article>{children}</Article>
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout
