import styles from './roadmapScreen.module.scss'
import { useLocales } from '../../../hooks/useLocales'

import ScreenTitle from '../../../components/UI/screenTitle/screenTitle'

const generateQuarter = (index) => {
  const date = new Date()
  const startYear = +date.getFullYear().toString().slice(-2)
  const startQuarter = Math.floor(date.getMonth() / 3)

  const quarterBase4String = (startYear * 4 + startQuarter + index).toString(4)
  const year = parseInt(quarterBase4String.slice(0, -1), 4)
  const quarter = +quarterBase4String.slice(-1) + 1
  return `${year}Q${quarter}`
}

const Line = () => (
  <svg xmlns='http://www.w3.org/2000/svg' className={styles.line} height={1}>
    <line x1='0' y1='1' x2='100%' y2='1' stroke={'white'} />
  </svg>
)

const RoadmapScreen = () => {
  const locale = useLocales('pages.home.roadmap-screen')
  return (
    <div id='roadmap' className={styles.container}>
      <ScreenTitle>{locale.title}</ScreenTitle>
      <div className={styles.roadmap}>
        {locale.stages.map((stage, index) => (
          <div key={index} className={styles.roadmapBlock}>
            <div className={styles.quarterLabelWrapper}>
              <div className={styles.quarterLabel}>
                {generateQuarter(index)}
              </div>
            </div>
            <Line />
            <div className={styles.quarterWrapper}>
              <div className={styles.quarter}>
                <ul>
                  {stage.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoadmapScreen
