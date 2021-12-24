import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Asylum</title>
        <meta property="og:title" content="Asylum" />
      </Helmet>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <img
            alt="image"
            src="/playground_assets/asylum_cover-500w.png"
            className={styles['image']}
          />
          <div className={styles['container3']}>
            <span className={styles['text']}>
              The space for your on-chain gaming
            </span>
          </div>
          <div className={styles['container4']}>
            <a
              href="https://drive.google.com/file/d/1Dz-LyiHJVeeWKwyhH-F3Oe0nEmQTwsU6/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className={` ${styles['link']} ${projectStyles['button']} `}
            >
              Litepaper
            </a>
            <a
              href="https://lastsymbol0.github.io/Asylum/#/Asylum/"
              target="_blank"
              rel="noreferrer noopener"
              className={` ${styles['link1']} ${projectStyles['button']} `}
            >
              App demo
            </a>
            <a
              href="https://www.canva.com/design/DAEyFF4xBd0/0xCBmqtSB4G7GiFfCuaIcA/view?utm_content=DAEyFF4xBd0&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=sharebutton"
              target="_blank"
              rel="noreferrer noopener"
              className={` ${styles['link2']} ${projectStyles['button']} `}
            >
              Pitch deck
            </a>
          </div>
        </div>
        <div className={styles['container5']}>
          <div className={styles['container6']}>
            <a
              href="https://twitter.com/AsylumPlatform"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link3']}
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/3eqJKXDjkZ"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link4']}
            >
              Discord
            </a>
            <a
              href="https://t.me/AsylumPlatform"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link5']}
            >
              Telegram
            </a>
          </div>
          <div className={styles['container7']}>
            <span className={styles['text1']}>
              <span>
                Contact us:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>asylum.platform@gmail.com</span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
