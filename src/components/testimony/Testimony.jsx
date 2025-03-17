"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "./testimony.css"

const testimonials = [
  {
    text: "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
    name: "Petey Cruiser",
    position: "Designer at Colorlib",
    image: "/src/assets/public/founder-img.png",
  },
  {
    text: "Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.",
    name: "Petey Cruiser",
    position: "Designer at Colorlib",
    image: "/src/assets/public/founder-img.png",
  },
 
]

const Testimony = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-section">
        <h2 className="testimonial-heading">Customer Testimonial</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="slide-container"  key={index}>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h3 className="author-name">{testimonial.name}</h3>
                      <p className="author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimony

