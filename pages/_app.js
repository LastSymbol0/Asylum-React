import '../assets/index.scss'

import { useEffect } from 'react'
import renderer from '../utils/renderer'

import Header from '../components/header/header'
import ScrollTop from '../components/scrollTop/scrollTop'

import smoothscroll from 'smoothscroll-polyfill'

import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    smoothscroll.polyfill()
    renderer.useMouseEvent()
    renderer.render()

    router.events.on('routeChangeComplete', (pathname) => {
      if (pathname !== '/') {
        window.scrollTo(0, 0)
      }
    })
    // renderer.setToRender({handler: () => console.log(renderer.getRendering())})
  })

  return (
    <>
      <Head>
        <link rel='icon' href='/asylum.png' />
      </Head>
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N4V47KJ');`,
        }}
      ></Script>
      <Header />
      <div className='scrollContainer'>
        <Component {...pageProps} />
      </div>
      <ScrollTop />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4V47KJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
    </>
  )
}

export default MyApp
