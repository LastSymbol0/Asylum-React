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
              href="https://drive.google.com/file/d/1sEk159ISUZypgUSflsHFyqP0Z7IRJtdl/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className={` ${styles['link']} ${projectStyles['button']} `}
            >
              Litepaper
            </a>
            <a
              href="https://www.canva.com/design/DAE1y6AHyCA/Lh0gxRtIePVtb_QfzyP6aQ/view?utm_content=DA[…]tm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
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
              <a href="mailto:info@asylum.space">Contact us</a>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
