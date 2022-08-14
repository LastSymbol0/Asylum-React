import styles from './featureScreen.module.scss'
import { useLocales } from '../../../hooks/useLocales'

import { useState } from 'react'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'
import Button from '../../../components/UI/button/button'
import TheSlider from './slider/slider'

const FeatureScreen = () => {
  const locale = useLocales('pages.home.feature-screen')
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div id='features' className={styles.featureScreen}>
      <div className={styles.featureScreen__content}>
        <ScreenTitle className={styles.featureScreen__screenTitle}>
          {locale.title}
        </ScreenTitle>
        <div className={styles.featureScreen__tabs}>
          {locale.slider.map((_, i) => (
            <Button
              key={i}
              type='tab'
              label='outlineGradient'
              active={activeSlide === i}
              onClick={() => setActiveSlide(i)}
            >
              {_.tab}
            </Button>
          ))}
        </div>
        <TheSlider activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      </div>
    </div>
  )
}

export default FeatureScreen
