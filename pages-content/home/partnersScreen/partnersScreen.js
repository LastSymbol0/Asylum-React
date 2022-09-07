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
import logoBlockchainGameAllianceColored from './assets/logo-blockchain-game-alliance-colored.png'
import logoBlockchainGameAlliance from './assets/logo-blockchain-game-alliance.png'
import logoMetaverseStanardsForum from './assets/logo-metaverse-standrads-forum.png'
import logoMetaverseStanardsForumColored from './assets/logo-metaverse-standrads-forum-colored.png'
import classNames from 'classnames'

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
  'blockchain-game-alliance': {
    colored: logoBlockchainGameAllianceColored,
    basic: logoBlockchainGameAlliance,
  },
  'metaverse-standrads-forum': {
    colored: logoMetaverseStanardsForumColored,
    basic: logoMetaverseStanardsForum,
  },
}

const PartnersScreen = () => {
  const locale = useLocales('pages.home.partners-screen')
  return (
    <div className={styles.partnersScreen}>
      <ScreenTitle className={styles.title}>{locale.title}</ScreenTitle>
      <div className={styles.content}>
        {locale.list.map((partner) => (
          <a
            key={partner.title}
            className={styles.link}
            href={partner.link}
            target='_blank'
            rel='noreferrer'
          >
            <Image
              className={classNames(styles.logo_basic, styles.logo)}
              priority={true}
              src={data[partner.title].basic}
              objectFit={'contain'}
              layout={'fill'}
              alt={`Asylum | ${partner.title}`}
            />
            <Image
              className={classNames(styles.logo_colored, styles.logo)}
              priority={true}
              src={data[partner.title].colored}
              objectFit={'contain'}
              layout={'fill'}
              alt={`Asylum | ${partner.title}`}
            />
          </a>
        ))}
      </div>
      <div className={styles.partnersScreen__border}></div>
    </div>
  )
}

export default PartnersScreen
