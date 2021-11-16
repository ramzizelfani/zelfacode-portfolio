import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ZelfaCode's Portfolio" />
        <meta name="author" content="ramzi Zelfani" />
        <meta name="author" content="ZelfaCode" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RamzyZlaf" />
        <meta name="twitter:creator" content="@RamzyZlaf" />
        <meta name="twitter:image" content="/card.jpg" />
        <meta property="og:site_name" content="Ramzi Zelfani's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.jpg" />
        <title>Ramzi Zelfani - Home</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
