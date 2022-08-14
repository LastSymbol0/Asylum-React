import Head from 'next/head'
import HomeContent from '../pages-content/home'

const Home = () => {
  return (
    <>
      <Head>
        <title>Asylum ★ the one to unite all spaces into a Мetaverse</title>
        <meta
          name='description'
          content='✦✦✦Asylum is about gaming, educational, event and other space union to create a true limitless metaverse✦✦✦'
        />
      </Head>
      <HomeContent />
    </>
  )
}

export default Home
