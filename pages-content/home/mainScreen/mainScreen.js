import styles from './mainScreen.module.scss'
import cn from 'classnames'
import { useLocales } from '../../../hooks/useLocales'

import Image from 'next/image'
import backgroundImage from './assets/background.png'
import backgroundMobileImage from './assets/background@mobile.png'

import Button from '../../../components/UI/button/button'

const mainScreen = () => {
    const locale = useLocales('pages.home.main-screen')
    return (
        <div className={styles.mainScreen}>
            <div className={styles.mainScreen__content}>
                <h1 data-text={ locale.title } className={styles.mainScreen__title}>{ locale.title }</h1>
                <div className={styles.content__buttons}>
                    {locale.cta.map((_, i) => (
                        <Button 
                            key={i} 
                            className={cn(styles.mainScreen__button, styles[`button${i + 1}`])}
                            link={ _.link }
                            label="outlineGradient" 
                            type="big"
                        >
                            { _.title }
                        </Button>
                    ))}
                </div>
                <div className={styles.content__background}>
                    <div className={styles.backgroundDesktop}>
                        <Image 
                            src={backgroundImage} 
                            priority={true} 
                            alt=""
                        />
                    </div>
                    <div className={styles.backgroundMobile}>
                        <Image 
                            src={backgroundMobileImage} 
                            priority={true} 
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mainScreen