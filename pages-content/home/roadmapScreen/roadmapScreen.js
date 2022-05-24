import styles from './roadmapScreen.module.scss'
import cn from 'classnames'
import { useLocales } from '../../../hooks/useLocales'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'

import Image from 'next/image'
import backgroundImage from './assets/background.png'
import backgroundMobileImage from './assets/background@mobile.png'
import block1Image from './assets/block-1-bad.png'
import block2Image from './assets/block-2.png'
import block3Image from './assets/block-3.png'
import block4Image from './assets/block-4.png'
import block5Image from './assets/block-5.png'
import circleImage from './assets/circle.png'
import scheme1Image from './assets/scheme-1.png'
import scheme2Image from './assets/scheme-2.png'
import scheme3Image from './assets/scheme-3.png'

const data = [
    {
        block: block1Image,
        scheme: scheme1Image
    },
    {
        block: block2Image,
    },
    {
        block: block3Image,
        scheme: scheme2Image
    },
    {
        block: block4Image,
        scheme: scheme3Image
    },
    {
        block: block5Image,
    },
]

const RoadmapScreen = () => {
    const locale = useLocales('pages.home.roadmap-screen')
    return (
        <div id="roadmap" className={styles.roadmapScreen}>
            <div className={styles.roadmapScreen__content}>
                <ScreenTitle className={styles.roadmapScreen__screenTitle}>{ locale.title }</ScreenTitle>
                <div className={styles.roadmapScreen__scheme}>
                    {locale.stages.map((_, i) => (
                        <div key={i} className={styles.scheme__row}>
                            <div className={styles.scheme__block}>
                                {_.list.map(text => <p key={text + i}>{ text }</p>)}
                                <Image src={data[i].block} priority={true} alt="" />
                                <div className={styles.block__circle}>
                                    { _.title }
                                    <Image src={circleImage} priority={true} alt="" />
                                </div>
                            </div>
                            { data[i].scheme && 
                                <div className={styles.scheme__scheme}>
                                    <Image src={data[i].scheme} priority={true} alt="" />
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <div className={styles.roadmapScreen__background}>
                    <div className={styles.backgroundDesktop}>
                        <Image src={backgroundImage} priority={true} alt=""/>
                    </div>
                    <div className={styles.backgroundMobile}>
                        <Image src={backgroundMobileImage} priority={true} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadmapScreen