import styles from './partnersScreen.module.scss'
import cn from 'classnames'
import { useLocales } from '../../../hooks/useLocales'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'

import Image from 'next/image'
import logoDarwiniaImage from './assets/logo-darwinia.png'
import logoMempoolImage from './assets/logo-mempool.png'
import logoSupercolonyImage from './assets/logo-supercolony.png'
import logoDarwiniaColoredImage from './assets/logo-darwinia-colored.png'
import logoMempoolColoredImage from './assets/logo-mempool-colored.png'
import logoSupercolonyColoredImage from './assets/logo-supercolony-colored.png'

const data = {
    "darwinia": {
        basic: logoDarwiniaImage,
        colored: logoDarwiniaColoredImage
    },
    "mempool": {
        basic: logoMempoolImage,
        colored: logoMempoolColoredImage
    },
    "supercolony": {
        basic: logoSupercolonyImage,
        colored: logoSupercolonyColoredImage
    },
}


const PartnersScreen = () => {
    const locale = useLocales('pages.home.partners-screen')
    return (
        <div className={styles.partnersScreen}>
            <ScreenTitle className={styles.partnersScreen__screenTitle}>{ locale.title }</ScreenTitle>
            <div className={styles.partnersScreen__content}>
                {locale.list.map((_, i) => (
                    <a 
                        key={i} 
                        className={styles.content__logo}
                        href={_.link} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <span className={styles.logo_basic}>
                            <Image priority={true} src={data[_.title].basic} alt="" />
                        </span>
                        <span className={styles.logo_colored}>
                            <Image priority={true} src={data[_.title].colored} alt="" />
                        </span>
                    </a>
                ))}
            </div>
            <div className={styles.partnersScreen__border}></div>
        </div>
    )
}

export default PartnersScreen