import styles from './mainScreen.module.scss'
import cn from 'classnames'
import { useLocales } from '../../../hooks/useLocales'

import Image from 'next/image'
import backgroundImage from './assets/background.png'
import backgroundMobileImage from './assets/background@mobile.png'

import Button from '../../../components/UI/button/button'
import { scrollTo } from '../../../utils/scrollTo'


const mainScreen = () => {
    const locale = useLocales('pages.home.main-screen')
    return (
        <div className={styles.mainScreen}>
            <div className={styles.mainScreen__content}>
                <h1 data-text={ locale.title } className={styles.mainScreen__title}>{ locale.title }</h1>
                <div className={styles.content__buttons}>

                    <Button
                        className={cn(styles.mainScreen__button, styles[`button${1}`])}
                        link={ locale.cta[0].link }
                        label="outlineGradient"
                        type="big"
                    >
                        { locale.cta[0].title }
                    </Button>

                    <Button
                        className={cn(styles.mainScreen__button, styles[`button${2}`])}
                        link={ locale.cta[1].link }
                        label="outlineGradient"
                        type="big"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollTo('#features')
                        }}
                    >
                        { locale.cta[1].title }
                    </Button>
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