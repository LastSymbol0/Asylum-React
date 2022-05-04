import styles from './loading.module.scss'
import cn from 'classnames'

import { useRef, useEffect } from 'react'
import renderer from '../../../../utils/renderer'

const TheArrow = () => (
    <div className={styles.loading__arrow}>
        <svg width="159" height="18" viewBox="0 0 159 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="124" height="1" transform="matrix(-1 0 0 1 124 9)" fill="url(#paint0_linear_952_6)"/>
            <path d="M158 9L158.265 9.26517C158.412 9.11872 158.412 8.88128 158.265 8.73483L158 9ZM149.735 1.26517L157.735 9.26517L158.265 8.73483L150.265 0.734835L149.735 1.26517ZM157.735 8.73483L149.735 16.7348L150.265 17.2652L158.265 9.26517L157.735 8.73483Z" fill="white"/>
            <defs>
                <linearGradient id="paint0_linear_952_6" x1="0" y1="0" x2="124" y2="-1.00117e-08" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B0B0B0"/>
                    <stop offset="1" stopColor="#B0B0B0" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
)

const TheLoading = ({ className, children, ...props }) => {
    const line = useRef()

    useEffect(() => {
        const label = `theLoadingProgress${Date.now()}`
        renderer.setToRender({
            label,
            handler: loadingProgress,
            props: [ line.current ],
            renderDelay: 10
        })
        return () => renderer.removeFromRender(label)
    })


    return (
        <div { ...props } className={cn(styles.loading, className)}>
            <div className={styles.loading__elements}>
                <TheArrow/>
                <div data-text={ children } className={styles.loading__line}>
                    <div ref={line} className={styles.line_active}></div>
                </div>
                <TheArrow/>
            </div>
        </div>
    )
}  

function loadingProgress(line) {
    if (!line) { return }
    if (!renderer.isElementVisible(line)) { return }
    const scrollY = renderer.getScrollCoordsFromElement(line).windowBottom.fromTop
    const progress = scrollY * 100 / window.innerHeight * 1.3
    line.style.maxWidth = `${progress}%`
}

export default TheLoading