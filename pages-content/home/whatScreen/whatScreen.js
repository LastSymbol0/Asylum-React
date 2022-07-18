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
      <ScreenTitle>{locale.title}</ScreenTitle>
      <div className={styles.rows}>
        <div className={styles.row}>
          {locale.body[0].split('\n').map((textpart, index) => (
            <p key={index}>{textpart}</p>
          ))}
        </div>
        <div className={styles.background}>
          <div
            ref={ref}
            className={classNames(
              styles.sledman,
              inView ? styles.running : null
            )}
          >
            <Image priority={true} src={sledman} alt='sledman' />
          </div>
          <Image priority={true} src={backgroundImage} alt='castle' />
        </div>
        <div className={styles.row}>
          {locale.body[1].split('\n').map((textpart, index) => (
            <p key={index}>{textpart}</p>
          ))}
        </div>
      </div>
      <TheLoading className={styles.loading}>{locale.loading}</TheLoading>
    </div>
  )
}

export default WhatScreen
