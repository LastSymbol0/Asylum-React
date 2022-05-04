import '../assets/index.scss'

import { useEffect, useRef } from 'react'
import renderer from '../utils/renderer'
import { LAPTOP_BREAKPOINT } from '../utils/contsants'

import Header from '../components/header/header'
import ScrollTop from '../components/scrollTop/scrollTop'

import smoothscroll from 'smoothscroll-polyfill'

import { useRouter } from 'next/router'
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    smoothscroll.polyfill()
    renderer.useMouseEvent()
    renderer.render()

    router.events.on('routeChangeComplete', (pathname) => {
      if (pathname !== '/') { window.scrollTo(0, 0) }
    })
    // renderer.setToRender({handler: () => console.log(renderer.getRendering())})
  })

  return (
    <>
        <Head>
            <link rel="icon" href="/asylum.png" />
        </Head>
      <Header/>
      <div className="scrollContainer">
        <Component {...pageProps} />
      </div>
      <ScrollTop/>
    </>
  )
}

export default MyApp
