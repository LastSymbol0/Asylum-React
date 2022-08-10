import styles from './whatScreen.module.scss'
import { useLocales } from '../../../hooks/useLocales'

import Image from 'next/image'
import backgroundImage from './assets/background.png'
import sledman from './assets/sledman.png'
import { useInView } from 'react-intersection-observer'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'
import TheLoading from './loading/loading'
import classNames from 'classnames'

const WhatScreen = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-30% 0px',
  })

  const locale = useLocales('pages.home.what-screen')

  return (
    <div id='theAsylum' className={styles.whatScreen}>
      <ScreenTitle as={'h1'} contentClassName={styles.title}>
        {locale.title}
      </ScreenTitle>
      <div className={styles.picture}>
        <div
          ref={ref}
          className={classNames(styles.sledman, inView ? styles.running : null)}
        >
          <Image loading='eager' priority={true} src={sledman} alt='sledman' />
        </div>
        <Image
          loading='eager'
          priority={true}
          src={backgroundImage}
          alt='castle'
        />
      </div>
      <div className={styles.text}>
        {locale.body.map((textpart, index) => (
          <p key={index}>{textpart}</p>
        ))}
      </div>
      <TheLoading className={styles.loading}>{locale.loading}</TheLoading>
    </div>
  )
}

export default WhatScreen
