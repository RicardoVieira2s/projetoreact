import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import './slideshow.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

function Slideshow({ games }) {
  function onProgress(swiper, progress) {
    const scaleStep = 0.2
    const zIndexMax = swiper.slides.length
    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i]
      const slideProgress = swiper.slides[i].progress
      const absProgress = Math.abs(slideProgress)
      let modify = 1
      if (absProgress > 1) {
        modify = (absProgress - 1) * 0.3 + 1
      }
      const opacityEls = slideEl.querySelectorAll(
        '.carousel-slider-animate-opacity'
      )
      const translate = `${slideProgress * modify * 50}%`
      const scale = 1 - absProgress * scaleStep
      const zIndex = zIndexMax - Math.abs(Math.round(slideProgress))
      slideEl.style.transform = `translateX(${translate}) scale(${scale})`
      slideEl.style.zIndex = zIndex
      if (absProgress > 3) {
        slideEl.style.opacity = 0
      } else {
        slideEl.style.opacity = 1
      }

      opacityEls.forEach((opacityEl) => {
        opacityEl.style.opacity = 1 - absProgress / 3
      })
    }
  }

  function onSetTransition(swiper, duration) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i]
      const opacityEls = slideEl.querySelectorAll(
        '.carousel-slider-animate-opacity'
      )
      slideEl.style.transitionDuration = `${duration}ms`
      opacityEls.forEach((opacityEl) => {
        opacityEl.style.transitionDuration = `${duration}ms`
      })
    }
  }

  return (
    <div className='slideshow'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        watchSlidesProgress
        grabCursor
        loop
        loopedSlides={5}
        slidesPerView='auto'
        centeredSlides
        onProgress={onProgress}
        onSetTransition={onSetTransition}
        onSlideChange={(swiper) => console.log(swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        slideToClickedSlide={true}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className='swiper-slide'>
            <div className='carousel-slider-animate-opacity'>

              <img src={game.coverImage} className='slide-bg-image' alt='' />

              <div class='slide-content'>
                <a href={"http://localhost:3000/gamepage/" + game.id}>
                  <h2 className='slide-title' target="_blank">{game.name}</h2>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  )
}

export default Slideshow
