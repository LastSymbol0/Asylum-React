import styles from './slider.module.scss'
import { useLocales } from '../../../../hooks/useLocales'
import cn from 'classnames'

import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import slide1Image from './assets/1.png'
import slide2Image from './assets/2.png'
import slide3Image from './assets/3.png'
import slide4Image from './assets/4.png'
import slide5Image from './assets/5.png'
import blurImage from './assets/blur.png'

import { useState, useEffect } from 'react'

const data = [
    slide1Image,
    slide2Image,
    slide3Image,
    slide4Image,
    slide5Image
]

const TheSlider = ({ activeSlide, setActiveSlide }) => {
    const locale = useLocales('pages.home.feature-screen')
    const [ swiper, setSwiper ] = useState(null)

    useEffect(() => {
        if (!swiper) { return }
        swiper.slideTo(activeSlide)
    }, [ activeSlide ])

    return (
        <div className={styles.feature__slider}>
            <Swiper
                modules={[Navigation, A11y]}
                slidesPerView={1}
                centeredSlides={true}
                navigation
                onSwiper={setSwiper}
                onSlideChange={(props) => setActiveSlide(props.realIndex)}
            >
                {locale.slider.map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className={cn(styles.slider__slide, styles[`slide${i + 1}`])}>
                            <div className={styles.slide__image}>
                                <Image priority={true} src={data[i]} alt="" />
                            </div>
                            <div className={styles.slide__content}>
                                <h3>{ _.title }</h3>
                                <div className={styles.content__text}>
                                    {_.body.map(text => (
                                        <p key={text + i}>{ text }</p>
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