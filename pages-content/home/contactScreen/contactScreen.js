import styles from './contactScreen.module.scss'
import { useLocales } from '../../../hooks/useLocales'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'

import Image from 'next/image'
import discordImage from './assets/discord.png'
import linkedinImage from './assets/linkedin.png'
import telegramImage from './assets/telegram.png'
import twitterImage from './assets/twitter.png'
import discordColoredImage from './assets/discord-colored.png'
import linkedinColoredImage from './assets/linkedin-colored.png'
import telegramColoredImage from './assets/telegram-colored.png'
import twitterColoredImage from './assets/twitter-colored.png'
import patternImage from './assets/pattern.png'
import pictureImage from './assets/picture.png'

const data = {
  linkedin: {
    basic: linkedinImage,
    colored: linkedinColoredImage,
  },
  twitter: {
    basic: twitterImage,
    colored: twitterColoredImage,
  },
  telegram: {
    basic: telegramImage,
    colored: telegramColoredImage,
  },
  discord: {
    basic: discordImage,
    colored: discordColoredImage,
  },
}

const ContactScreen = () => {
  const locale = useLocales('pages.home.contact-screen')
  return (
    <div className={styles.contactScreen}>
      <ScreenTitle className={styles.contactScreen__screenTitle}>
        {locale.title}
      </ScreenTitle>
      <div className={styles.contactScreen__content}>
        <div className={styles.content__image}>
          <Image priority={true} src={pictureImage} alt='' />
        </div>
        <div className={styles.content__list}>
          {locale.list.map((_, i) => (
            <a
              key={i}
              className={styles.content__logo}
              href={_.link}
              target='_blank'
              rel='noreferrer'
            >
              <span className={styles.logo_basic}>
                <Image
                  priority={true}
                  src={data[_.title].basic}
                  alt={`Asylum | ${_.title}`}
                />
              </span>
              <span className={styles.logo_colored}>
                <Image
                  priority={true}
                  src={data[_.title].colored}
                  alt={`Asylum | ${_.title}`}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.contactScreen__background}>
        <Image src={patternImage} alt='' />
      </div>
    </div>
  )
}

export default ContactScreen
