import styles from './teamScreen.module.scss'
import cn from 'classnames'
import { useLocales } from '../../../hooks/useLocales'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'
import PersonCard from '../../../components/personCard/personCard'
import Button from '../../../components/UI/button/button'

import Image from 'next/image'
import patternImage from './assets/pattern.png'
import Illia from './assets/Illia.jpg'
import Maria from './assets/Maria.jpg'
import Markian from './assets/Markian.jpg'
import Sven from './assets/Sven.jpg'
import linesImage from './assets/lines.png'

import Link from 'next/link'

const avatars = {
    "Illia Abrosimov": Illia,
    "Maria Yaremenko": Maria,
    "Danylo Semirazov": Sven,
    "Markian Ivanichok": Markian,
}

const TeamScreen = () => {
    const locale = useLocales('pages.home.team-screen')
    return (
        <div id="team" className={styles.teamScreen}>
            <div className={styles.teamScreen__content}>
                <ScreenTitle className={styles.teamScreen__screenTitle}>{ locale.title }</ScreenTitle>
                <div className={styles.content__list}>
                    <div className={styles.list__cards}>
                        {locale.list.map((_, i) => (
                            <PersonCard 
                                key={i}
                                className={styles.content__card}
                                avatar={ avatars[_.name] } 
                                background={ linesImage }
                                name={ _.name }
                                position={ _.position }
                            />
                        ))}
                    </div>
                    <div className={styles.list__background}>
                        <Image src={patternImage} alt=""/>
                    </div>
                </div>
                <Link href={ locale.cta.link }>
                    <a className={styles.teamScreen__button}>
                        <Button 
                            label="outlineGradient" 
                            type="small"
                        >{ locale.cta.title }</Button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default TeamScreen