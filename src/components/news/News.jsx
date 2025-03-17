import React from 'react'
import "./news.css"

const News = () => {
    const newsData = [
        {
          "category": "Fashion Tips",
          "title": "What Curling Irons Are The Best Ones",
          "description": "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
          "image": "/src/assets/public/blog1.jpg",
          "readMore": "read-more-url-1"
        },
        {
          "category": "Fashion Tips",
          "title": "Vogue’s Ultimate Guide To Autumn/Winter 2019 Shoes",
          "description": "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
          "image": "/src/assets/public/blog2.jpg",
          "readMore": "read-more-url-2"
        },
        {
          "category": "Fashion Tips",
          "title": "What Curling Irons Are The Best Ones",
          "description": "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..",
          "image": "/src/assets/public/blog3.jpg",
          "readMore": "read-more-url-3"
        }
      ]
      
  return (
    <div className='news_body'>
      <div className="news_wrapper">
        <h1>Latest News</h1>
        <div className="news_container">
            {
                newsData.map((i,index)=>(
            <div className="news_card" key={index}>
                <div className="news_image">
                    <img src={i.image} alt="" />
                </div>
                <p>{i.category}</p>
                <h2>{i.title}</h2>
                <p>{i.description}</p>
                <a href={i.readMore}>Read More</a>
            </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default News
