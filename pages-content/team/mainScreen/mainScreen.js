import styles from './mainScreen.module.scss'
import cn from 'classnames'
import { useLocales } from '../../../hooks/useLocales'

import PersonCard from '../../../components/personCard/personCard'
import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'

import Image from 'next/image'
import backgroundImage from './assets/background.png'
import backgroundMobileImage from './assets/background@mobile.png'

import Illia from './assets/avatars/Illia.jpg'
import Maria from './assets/avatars/Maria.jpg'
import Sven from './assets/avatars/Sven.jpg'
import Markian from './assets/avatars/Markian.jpg'
import Max from './assets/avatars/Max.jpg'
import RoRo from './assets/avatars/RoRo.jpg'
import Alina from './assets/avatars/Alina.jpg'
import Horacio from './assets/avatars/Horacio.jpg'
import Leo from './assets/avatars/Leo.jpg'
import Alexander from './assets/avatars/Alexandr.jpg'
import Lera from './assets/avatars/Lera.jpg'
import IlliaOk from './assets/avatars/IlliaOkolsk.jpg'

import Olesia from './assets/avatars/Olesia.jpg'
import Ian from './assets/avatars/Ian.jpg'
import Nathan from './assets/avatars/Nathan.jpg'


const avatarsMembers = {
    "Illia Abrosimov": Illia,
    "Maria Yaremenko": Maria,
    "Danylo Semirazov": Sven,
    "Markian Ivanichok": Markian,
    "Alina Antropova": Alina,
    "Max Samchevskiy": Max,
    "Roman Dyra": RoRo,
    "Illia Okolskyi": IlliaOk,
    "Horacio Lex": Horacio,
    "Lera Yakovenko": Lera,
    "Leonid Nechyporenko": Leo,
}

const avatarsAdvisors = {
    "Olesia Arkhipova": Olesia,
    "Alexander Kaplaty": Alexander,
    "Ian Arden": Ian,
    "Nathan Kay": Nathan
}

const MainScreen = () => {
    const locale = useLocales('pages.team.main-screen')
    return (
        <div className={styles.mainScreen}>
            <ScreenTitle className={styles.mainScreen__screenTitle}>{ locale.members.title }</ScreenTitle>
            <div className={styles.mainScreen__content}>
                {locale.members.list.map((_, i) => (
                    <PersonCard
                        key={i}
                        className={styles.content__card}
                        avatar={ avatarsMembers[_.name] } 
                        name={ _.name }
                        position={ _.position }
                        social={ _.social }
                    />
                ))}
            </div>
            <ScreenTitle className={styles.mainScreen__screenTitle}>{ locale.advisors.title }</ScreenTitle>
            <div className={styles.mainScreen__content}>
                {locale.advisors.list.map((_, i) => (
                    <PersonCard
                        key={i}
                        className={styles.content__card}
                        avatar={ avatarsAdvisors[_.name] } 
                        name={ _.name }
                        position={ _.position }
                        social={ _.social }
                        description={ _.body }
                    />
                ))}
            </div>
            <div className={styles.mainScreen__background}>
                <div className={styles.backgroundDesktop}>
                    <Image src={backgroundImage} priority={true} alt="" />
                </div>
                <div className={styles.backgroundMobile}>
                    <Image src={backgroundMobileImage} priority={true} alt="" />
                </div>
            </div> 
        </div>
    )
}

export default MainScreen