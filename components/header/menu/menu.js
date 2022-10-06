import styles from './menu.module.scss'
import cn from 'classnames'
import { useLocales } from '../../../hooks/useLocales'

import { useRouter } from 'next/router'

import { useState, useRef, useEffect } from 'react'

const TheMenu = ({
  className,
  activeNumber,
  setScreen,
  setActiveNumber,
  ...props
}) => {
  const locale = useLocales('components.header')
  const router = useRouter()
  const button = useRef()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    document.addEventListener('click', listener)
    return () => document.removeEventListener('click', listener)
  })
  function listener(e) {
    if (e.target !== button.current) {
      setIsActive(false)
    }
  }

  return (
    <div {...props} className={cn(styles.menu, className)}>
      <div
        ref={button}
        onClick={() => setIsActive(true)}
        className={
          isActive
            ? cn(styles.menu__button, styles.active)
            : styles.menu__button
        }
      >
        <div></div>
        <div></div>
      </div>
      <div className={styles.menu__list}>
        {locale.nav.map((_, i) => {
          if (_.title.toLowerCase() === 'team') {
            return (
              <a
                key={i}
                onClick={() => {
                  router.push('/team')
                  setActiveNumber(i)
                  setIsActive(false)
                }}
                className={activeNumber === i ? styles.active : ''}
              >
                {_.title}
              </a>
            )
          }
          return (
            <a
              key={i}
              onClick={() => {
                setScreen(_.link, i)
                setIsActive(false)
              }}
              className={activeNumber === i ? styles.active : ''}
            >
              {_.title}
            </a>
          )
        })}
        <a key='docs' href={'https://docs.asylum.space/'}>
          {'docs'}
        </a>
      </div>
    </div>
  )
}

export default TheMenu
