import styles from './slider.module.scss'
import {useLocales} from '../../../../hooks/useLocales'
import cn from 'classnames'

import {A11y, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import entrypoint_layer1 from './assets/entrypoint/layer-1.png'
import entrypoint_layer2 from './assets/entrypoint/layer-2.png'
import entrypoint_layer3 from './assets/entrypoint/layer-3.png'
import entrypoint_man from './assets/entrypoint/man.png'

import interoperability_sword from './assets/interoperability/sword.png'
import interoperability_rpg from './assets/interoperability/rpg.png'
import interoperability_platformer from './assets/interoperability/platformer.png'
import interoperability_cards from './assets/interoperability/cards.png'
import interoperability_line1 from './assets/interoperability/line1.png'
import interoperability_line2 from './assets/interoperability/line2.png'
import interoperability_line3 from './assets/interoperability/line3.png'

import integration_left from './assets/integration/left.png'
import integration_right from './assets/integration/right.png'
import integration_center from './assets/integration/center.png'
import integration_man from './assets/integration/man.png'

import economic_1 from './assets/economic/1.png'
import economic_2 from './assets/economic/2.png'
import economic_3 from './assets/economic/3.png'
import economic_4 from './assets/economic/4.png'
import economic_5 from './assets/economic/5.png'

import sustainability_line from './assets/sustainability/line.png'
import sustainability_1 from './assets/sustainability/1.png'
import sustainability_2 from './assets/sustainability/2.png'
import sustainability_3 from './assets/sustainability/3.png'
import sustainability_4 from './assets/sustainability/4.png'
import sustainability_5 from './assets/sustainability/5.png'
import sustainability_6 from './assets/sustainability/6.png'
import sustainability_7 from './assets/sustainability/7.png'
import sustainability_man from './assets/sustainability/man.png'

import blurImage from './assets/blur.png'

import {useEffect, useRef, useState} from 'react'
import Parallax from "parallax-js";

const images = [
    [
        {src: interoperability_line1, top: 29, left: 95, width: 29, depth: 0.11},
        {src: interoperability_line2, top: 53, left: 80, width: 47, depth: 0.11},
        {src: interoperability_line3, top: 43, left: 123.5, width: 8.5, depth: 0.11},
        {src: interoperability_sword, top: 16, left: 122, width: 25, depth: 0.06},
        {src: interoperability_rpg, top: 36, left: 52, width: 65, depth: 0.1},
        {src: interoperability_platformer, top: 76, left: 55, width: 50, depth: 0.09},
        {src: interoperability_cards, top: 61, left: 95, width: 55, depth: 0.11},
    ],
    [
        {src: entrypoint_layer3, top: 71, left: 60, width: 90, depth: 0.06},
        {src: entrypoint_layer2, top: 63, left: 55, width: 90, depth: 0.12},
        {src: entrypoint_layer1, top: 55, left: 50, width: 90, depth: 0.18},
        {src: entrypoint_man, top: 25, left: 80, width: 35, depth: 0.4}
    ],
    [
        {src: integration_left, top: 10, left: 49, width: 36, depth: 0.06},
        {src: integration_center, top: 14, left: 84, width: 36, depth: 0.12},
        {src: integration_right, top: 10, left: 117, width: 36, depth: 0.06},
        {src: integration_man, top: 65, left: 50, width: 95, depth: 0.03},
    ],
    [
        {src: economic_1, top: 50, left: 49, width: 100, depth: 0.03},
        {src: economic_2, top: 50, left: 55, width: 95, depth: 0.06},
        {src: economic_4, top: 48, left: 65, width: 75, depth: 0.09},
        {src: economic_5, top: 50, left: 49, width: 100, depth: 0.12},
        {src: economic_3, top: 50, left: 49, width: 100, depth: 0.15},
    ],
    [
        {src: sustainability_line, top: 52, left: 50, width: 100, depth: 0.03},
        {src: sustainability_1, top: 78, left: 50, width: 30, depth: 0.03},
        {src: sustainability_2, top: 70, left: 68, width: 21, depth: 0.04},
        {src: sustainability_3, top: 64, left: 78, width: 16, depth: 0.04},
        {src: sustainability_4, top: 64, left: 100, width: 17, depth: 0.04},
        {src: sustainability_5, top: 77, left: 86, width: 24, depth: 0.03},
        {src: sustainability_6, top: 78, left: 125, width: 27, depth: 0.03},
        {src: sustainability_7, top: 70, left: 109, width: 22, depth: 0.04},
        {src: sustainability_man, top: 27, left: 68, width: 63, depth: 0.12},
    ]
]

const TheSlider = ({activeSlide, setActiveSlide}) => {
    const locale = useLocales('pages.home.feature-screen')
    const [swiper, setSwiper] = useState(null)

    useEffect(() => {
        if (!swiper) {
            return
        }
        swiper.slideTo(activeSlide)
    }, [activeSlide])

    const ref = useRef(null)

    useEffect(() => {
        if (!ref.current) return
        new Parallax(ref.current, {
            selector: '[data-depth]',
            pointerEvents: true
        })
    }, [ref])


    return (
        <div className={styles.feature__slider}>
            <Swiper
                ref={ref}
                modules={[Navigation, A11y]}
                slidesPerView={1}
                centeredSlides={true}
                navigation
                onSwiper={setSwiper}
                onSlideChange={(props) => setActiveSlide(props.realIndex)}
            >
                {locale.slider.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className={cn(styles.slider__slide, (i % 2) ? styles.slide__even : null)}>
                            <div className={styles.slide_image}>
                                <div className={styles.image__container}>
                                    {images[i].map((image, index) => (
                                        <div key={index}
                                             className={styles.image}
                                             style={{top: `${image.top}%`, left: `${image.left}%`}}
                                        >
                                            <div className={styles.depth} data-depth={image.depth}
                                                 style={{width: `${image.width}%`}}>
                                                <Image objectFit={'contain'} priority={true} src={image.src} alt=""/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.slide__content}>
                                <h3>{slide.title}</h3>
                                <div className={styles.content__text}>
                                    {slide.body.map(text => (
                                        <p key={text + i}>{text}</p>
                                    ))}
                                    <div className={styles.text__blur}>
                                        <Image src={blurImage} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TheSlider
