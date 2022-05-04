import styles from './whatScreen.module.scss'
import cn from 'classnames'
import { useLocales } from '../../../hooks/useLocales'

import Image from 'next/image'
import backgroundImage from './assets/background.png'
import icon1Image from './assets/icon-1.png'
import icon2Image from './assets/icon-2.png'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'
import TheLoading from './loading/loading'

const data = [
    icon2Image,
    icon1Image
]

const WhatScreen = () => {
    const locale = useLocales('pages.home.what-screen')
    return (
        <div className={styles.whatScreen}>
            <div className={styles.whatScreen__content}>
                <ScreenTitle>{ locale.title }</ScreenTitle>
                <div className={styles.content__rows}>
                    {locale.body.map((text, i) => (
                        <div key={i} className={styles.content__row}>
                            <p>{ text }</p>
                            <div className={styles.row__image}>
                                <Image src={data[i]} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.content__background}>
                    <Image priority={true} src={backgroundImage} alt="" />
                </div>
            </div>
            <TheLoading className={styles.whatScreen__loading}>{ locale.loading }</TheLoading>
        </div>
    )
}

export default WhatScreen