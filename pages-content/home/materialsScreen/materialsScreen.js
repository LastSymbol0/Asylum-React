import styles from './materialsScreen.module.scss'
import { useLocales } from '../../../hooks/useLocales'

import Image from 'next/image'
import patternImage from './assets/pattern.png'
import picture1Image from './assets/picture-1.png'
import picture2Image from './assets/picture-2.png'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'
import Button from '../../../components/UI/button/button'

const data = [picture1Image, picture2Image]

const MaterialsScreen = () => {
  const locale = useLocales('pages.home.materials-screen')
  return (
    <div id='materials' className={styles.materialsScreen}>
      <ScreenTitle className={styles.materialsScreen__screenTitle}>
        {locale.title}
      </ScreenTitle>
      <div className={styles.materialsScreen__content}>
        {locale.cta.map((_, i) => (
          <div key={i} className={styles.content__row}>
            <Image src={data[i]} priority={true} alt='' />
            <Button
              className={styles.row__button}
              label='outlineGradient'
              type='small'
              link={_.link}
            >
              {_.title}
            </Button>
          </div>
        ))}
        <div className={styles.content__background}>
          <Image src={patternImage} alt='' />
        </div>
      </div>
    </div>
  )
}

export default MaterialsScreen
