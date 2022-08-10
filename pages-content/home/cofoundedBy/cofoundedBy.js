import styles from './cofounedBy.module.scss'
import { useLocales } from '../../../hooks/useLocales'

import Image from 'next/image'
import logoSupercolonyImage from './assets/logo-supercolony.png'
import logoSupercolonyColoredImage from './assets/logo-supercolony-colored.png'

const data = {
  supercolony: {
    basic: logoSupercolonyImage,
    colored: logoSupercolonyColoredImage,
  },
}

const CofoundedBy = () => {
  const locale = useLocales('pages.home.cofounded-by')
  return (
    <div className={styles.partnersScreen}>
      <h2 className={styles.cofoundedText}>{locale.text}</h2>
      <div className={styles.partnersScreen__content}>
        <a
          className={styles.content__logo}
          href={locale.link}
          target='_blank'
          rel='noreferrer'
        >
          <span className={styles.logo_basic}>
            <Image priority={true} src={data[locale.title].basic} alt='' />
          </span>
          <span className={styles.logo_colored}>
            <Image priority={true} src={data[locale.title].colored} alt='' />
          </span>
        </a>
      </div>
    </div>
  )
}

export default CofoundedBy
