import styles from './slider.module.scss'
import { useLocales } from '../../../../hooks/useLocales'
import cn from 'classnames'

import { A11y, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import entrypointLayer1 from './assets/entrypoint/layer-1.png'
import entrypointLayer2 from './assets/entrypoint/layer-2.png'
import entrypointLayer3 from './assets/entrypoint/layer-3.png'
import entrypointMan from './assets/entrypoint/man.png'

import interoperabilitySword from './assets/interoperability/sword.png'
import interoperabilityRpg from './assets/interoperability/rpg.png'
import interoperabilityPlatformer from './assets/interoperability/platformer.png'
import interoperabilityCards from './assets/interoperability/cards.png'
import interoperabilityLine1 from './assets/interoperability/line1.png'
import interoperabilityLine2 from './assets/interoperability/line2.png'
import interoperabilityLine3 from './assets/interoperability/line3.png'

import integrationLeft from './assets/integration/left.png'
import integrationRight from './assets/integration/right.png'
import integrationCenter from './assets/integration/center.png'
import integrationMan from './assets/integration/man.png'

import economic1 from './assets/economic/1.png'
import economic2 from './assets/economic/2.png'
import economic3 from './assets/economic/3.png'
import economic4 from './assets/economic/4.png'
import economic5 from './assets/economic/5.png'

import sustainabilityline from './assets/sustainability/line.png'
import sustainability1 from './assets/sustainability/1.png'
import sustainability2 from './assets/sustainability/2.png'
import sustainability3 from './assets/sustainability/3.png'
import sustainability4 from './assets/sustainability/4.png'
import sustainability5 from './assets/sustainability/5.png'
import sustainability6 from './assets/sustainability/6.png'
import sustainability7 from './assets/sustainability/7.png'
import sustainabilityMan from './assets/sustainability/man.png'

import blurImage from './assets/blur.png'

import { useEffect, useRef, useState } from 'react'
import Parallax from 'parallax-js'

const images = [
  [
    { src: interoperabilityLine1, top: 29, left: 95, width: 29, depth: 0.11 },
    { src: interoperabilityLine2, top: 53, left: 80, width: 47, depth: 0.11 },
    {
      src: interoperabilityLine3,
      top: 43,
      left: 123.5,
      width: 8.5,
      depth: 0.11,
    },
    { src: interoperabilitySword, top: 16, left: 122, width: 25, depth: 0.06 },
    { src: interoperabilityRpg, top: 36, left: 52, width: 65, depth: 0.1 },
    {
      src: interoperabilityPlatformer,
      top: 76,
      left: 55,
      width: 50,
      depth: 0.09,
    },
    { src: interoperabilityCards, top: 61, left: 95, width: 55, depth: 0.11 },
  ],
  [
    { src: entrypointLayer3, top: 71, left: 60, width: 90, depth: 0.06 },
    { src: entrypointLayer2, top: 63, left: 55, width: 90, depth: 0.12 },
    { src: entrypointLayer1, top: 55, left: 50, width: 90, depth: 0.18 },
    { src: entrypointMan, top: 25, left: 80, width: 35, depth: 0.4 },
  ],
  [
    { src: integrationLeft, top: 10, left: 49, width: 36, depth: 0.06 },
    { src: integrationCenter, top: 14, left: 84, width: 36, depth: 0.12 },
    { src: integrationRight, top: 10, left: 117, width: 36, depth: 0.06 },
    { src: integrationMan, top: 65, left: 50, width: 95, depth: 0.03 },
  ],
  [
    { src: economic1, top: 50, left: 49, width: 100, depth: 0.03 },
    { src: economic2, top: 50, left: 55, width: 95, depth: 0.06 },
    { src: economic4, top: 48, left: 65, width: 75, depth: 0.09 },
    { src: economic5, top: 50, left: 49, width: 100, depth: 0.12 },
    { src: economic3, top: 50, left: 49, width: 100, depth: 0.15 },
  ],
  [
    { src: sustainabilityline, top: 52, left: 50, width: 100, depth: 0.03 },
    { src: sustainability1, top: 78, left: 50, width: 30, depth: 0.03 },
    { src: sustainability2, top: 70, left: 68, width: 21, depth: 0.04 },
    { src: sustainability3, top: 64, left: 78, width: 16, depth: 0.04 },
    { src: sustainability4, top: 64, left: 100, width: 17, depth: 0.04 },
    { src: sustainability5, top: 77, left: 86, width: 24, depth: 0.03 },
    { src: sustainability6, top: 78, left: 125, width: 27, depth: 0.03 },
    { src: sustainability7, top: 70, left: 109, width: 22, depth: 0.04 },
    { src: sustainabilityMan, top: 27, left: 68, width: 63, depth: 0.12 },
  ],
]

const TheSlider = ({ activeSlide, setActiveSlide }) => {
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
      pointerEvents: true,
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
            <div
              className={cn(
                styles.slider__slide,
                i % 2 ? styles.slide__even : null
              )}
            >
              <div className={styles.slide_image}>
                <div className={styles.image__container}>
                  {images[i].map((image, index) => (
                    <div
                      key={index}
                      className={styles.image}
                      style={{ top: `${image.top}%`, left: `${image.left}%` }}
                    >
                      <div
                        className={styles.depth}
                        data-depth={image.depth}
                        style={{ width: `${image.width}%` }}
                      >
                        <Image
                          objectFit='contain'
                          priority={true}
                          src={image.src}
                          alt=''
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.slide__content}>
                <h3>{slide.title}</h3>
                <div className={styles.content__text}>
                  {slide.body.map((text) => (
                    <p key={text + i}>{text}</p>
                  ))}
                  <div className={styles.text__blur}>
                    <Image src={blurImage} alt='' />
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
