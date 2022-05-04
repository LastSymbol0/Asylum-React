import styles from './scrollTop.module.scss'

import renderer from '../../utils/renderer'
import { useEffect, useRef } from 'react'

const ScrollTop = () => {
    const button = useRef()

    useEffect(() => {
        const label = `scrollTop${Date.now()}`
        renderer.setToRender({
            label,
            handler: toggleScrollTop,
            props: [ button.current ],
            renderDelay: 100
        })
        return () => renderer.removeFromRender(label)
    })

    return (
        <div 
            ref={button}
            className={styles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_998_88)"/>
                <g clipPath="url(#clip0_998_88)">
                <path d="M11.4808 29.5781L11.6586 33.7275L18.2404 28.1012C21.8692 24.9715 24.9288 22.4396 25.0711 22.4396C25.2135 22.4396 28.2375 24.9715 31.8308 28.066C35.424 31.1605 38.4125 33.6924 38.5192 33.6924C38.626 33.6924 38.626 31.7231 38.5192 29.2968L38.3413 24.9012L31.7596 19.2748C28.1663 16.1803 25.1067 13.6484 25 13.6484C24.7865 13.6484 12.2279 24.3385 11.6586 25.0067C11.4452 25.2528 11.374 27.0462 11.4808 29.5781Z" fill="white"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_998_88" x1="24.6154" y1="59.2308" x2="24.6154" y2="-36.1538" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CC00FF"/>
                <stop offset="1" stopColor="#50BFFF"/>
                </linearGradient>
                <clipPath id="clip0_998_88">
                <rect width="24.6154" height="28.4615" fill="white" transform="translate(10.7692 36.1538) rotate(-90)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}

function toggleScrollTop(button) {
    if (!button) { return }
    if (window.scrollY >= window.innerHeight) {
        if (!button.classList.contains(styles.active)) { button.classList.add(styles.active) }
    } else {
        if (button.classList.contains(styles.active)) { button.classList.remove(styles.active) }
    }
}

export default ScrollTop