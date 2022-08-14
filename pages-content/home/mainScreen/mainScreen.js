import styles from './mainScreen.module.scss'
import { useLocales } from '../../../hooks/useLocales'

import Image from 'next/image'
import backgroundImage from './assets/background.png'
import backgroundMobileImage from './assets/background@mobile.png'

const mainScreen = () => {
  const locale = useLocales('pages.home.main-screen')
  return (
    <div className={styles.mainScreen}>
      <div className={styles.mainScreen__content}>
        <h2 data-text={locale.title} className={styles.mainScreen__title}>
          {locale.title}
        </h2>
        <div className={styles.content__background}>
          <div className={styles.backgroundDesktop}>
            <Image src={backgroundImage} priority={true} alt='' />
          </div>
          <div className={styles.backgroundMobile}>
            <Image src={backgroundMobileImage} priority={true} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default mainScreen
