import Head from 'next/head'
import HomeContent from '../pages-content/home'

const Home = () => {
  return (
    <>
      <Head>
        <title>Asylum</title>
        <meta name="description" content="Asylum" />
      </Head>
      <HomeContent/>
    </>
  )
}

export default Home
