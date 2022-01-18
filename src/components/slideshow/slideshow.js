import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// import "swiper/swiper-bundle.min.css";

import './slideshow.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'


const games = [
  {
    id: 1,
    name: 'Fortnite',
    description: 'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive. There are an estimated 125 million players on Fortnite.',
    image: 'https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg',
    url: 'https://www.google.pt'
  },
  {
    id: 2,
    name: 'CS GO',
    description: 'Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. ... The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes.',
    image: 'http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6',
    url: 'https://www.google.pt'
  },
  {
    id: 3,
    name: 'My Little Pony: Friendship is Magic',
    description:
      'Nightmare Moon has returned and covered the land in eternal darkness after escaping her imprisonment by her sister Celestia in the moon. Twilight Sparkle is the only pony to escape the darkness along with Spike the dragon, her assistant, which are attempting to rebuild their home, Ponyville, save everypony and collect the Elements of Harmony to defeat Nightmare Moon and bring sunlight back to the land of Equestria.',
    image: 'https://www.giantbomb.com/a/uploads/scale_small/3/36058/2352970-mlp_new_pack.jpg',
    url: 'https://www.google.pt'
  },
]

function Slideshow() {
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
        //navigation
        //pagination={{ clickable: true }}
        //autoplay={{ delay: 3000 }}
        onProgress={onProgress}
        onSetTransition={onSetTransition}
        onSlideChange={(swiper) => console.log(swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        slideToClickedSlide={true}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id} className='swiper-slide'>
            <div className='carousel-slider-animate-opacity'>

              <img src={game.image} className='slide-bg-image' alt='' />

              <div class='slide-content'>
                <a href={game.url}>
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
