import styles from './partnersScreen.module.scss'
import { useLocales } from '../../../hooks/useLocales'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'

import Image from 'next/image'
import logoDarwiniaImage from './assets/logo-darwinia.png'
import logoMempoolImage from './assets/logo-mempool.png'
import logoDarwiniaColoredImage from './assets/logo-darwinia-colored.png'
import logoMempoolColoredImage from './assets/logo-mempool-colored.png'
import logoNitroxColoredImage from './assets/logo-nitrox-colored.svg'
import logoNitroxImage from './assets/logo-nitrox-grey.svg'
import logoEvoColorImage from './assets/logo-evo-colored.png'
import logoEvoImage from './assets/logo-evo-grey.png'
import logoKatanaImageColored from './assets/logo-katana-colored.png'
import logoKatanaImage from './assets/logo-katana-grey.png'

const data = {
  darwinia: {
    basic: logoDarwiniaImage,
    colored: logoDarwiniaColoredImage,
  },
  mempool: {
    basic: logoMempoolImage,
    colored: logoMempoolColoredImage,
  },
  evoland: {
    colored: logoEvoColorImage,
    basic: logoEvoImage,
  },
  nitrox: {
    colored: logoNitroxColoredImage,
    basic: logoNitroxImage,
  },
  'katana-inu': {
    colored: logoKatanaImageColored,
    basic: logoKatanaImage,
  },
}

const PartnersScreen = () => {
  const locale = useLocales('pages.home.partners-screen')
  return (
    <div className={styles.partnersScreen}>
      <ScreenTitle className={styles.partnersScreen__screenTitle}>
        {locale.title}
      </ScreenTitle>
      <div className={styles.partnersScreen__content}>
        {locale.list.map((_, i) => (
          <a
            key={i}
            className={styles.content__logo}
            href={_.link}
            target='_blank'
            rel='noreferrer'
          >
            <span className={styles.logo_basic}>
              <Image priority={true} src={data[_.title].basic} alt='' />
            </span>
            <span className={styles.logo_colored}>
              <Image priority={true} src={data[_.title].colored} alt='' />
            </span>
          </a>
        ))}
      </div>
      <div className={styles.partnersScreen__border}></div>
    </div>
  )
}

export default PartnersScreen
