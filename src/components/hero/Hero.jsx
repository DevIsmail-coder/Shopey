import { useState, useEffect } from "react"
import "./hero.css"
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [fadeState, setFadeState] = useState("fade-in")

  const slides = [
    {
      image: "/h1_hero1.jpg",
      title: "Fashion Sale",
      heading: "Minimal Menz Style",
      description:
        "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
      buttonText: "SHOP NOW",
      layout: "image-right",
    },
    {
      image: "/h1_hero2.jpg",
      title: "Summer Collection",
      heading: "Trendy Women's Style",
      description: "Discover our latest collection of summer fashion pieces designed for the modern woman.",
      buttonText: "EXPLORE NOW",
      layout: "image-left", 
    },
  ]

  const nextSlide = () => {
    setFadeState("fade-out")

    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setFadeState("fade-in")
    }, 500) 
  }

  const prevSlide = () => {
    setFadeState("fade-out")
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setFadeState("fade-in")
    }, 500) 
  }

  const goToSlide = (index) => {
    if (index === currentSlide) return
    setFadeState("fade-out")

    
    setTimeout(() => {
      setCurrentSlide(index)
      setFadeState("fade-in")
    }, 500) 
  }
  useEffect(() => {
    let intervalId

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide()
      }, 5000) 
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => {
    setIsAutoPlaying(true)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const currentLayout = slides[currentSlide].layout

  return (
    <div className="hero_body">
      <div className="h_hero">
        <div className="hero_slider"  style={{backgroundColor: currentSlide? "#DEF3F4": "#FFFBFB"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          {/* <button className="nav-button prev" onClick={prevSlide}>
            <BiChevronLeft className="nav-icon" />
          </button>
          <button className="nav-button next" onClick={nextSlide}>
            <BiChevronRight className="nav-icon" />
          </button> */}
          <div className="slider-content-fade">
            <div className={`slide ${fadeState} ${currentLayout}`}>
              <div className="image-container">
                <img
                  src={slides[currentSlide].image}
                  className="slide-image"
                />
              </div>
              <div className="content">
                <h3 className="title">{slides[currentSlide].title}</h3>
                <h2 className="heading">{slides[currentSlide].heading}</h2>
                <p className="description">{slides[currentSlide].description}</p>
                <button className="shop-button">{slides[currentSlide].buttonText}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

