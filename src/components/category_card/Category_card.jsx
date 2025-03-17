import React from 'react'
import "./category_card.css"

const Category_card = () => {

    const category =[
        {
            img: "/items1.jpg",
            title: "Men's Fashion",
            text: 'Shop Now'
        },
        {
            img: "/items2.jpg",
            title: "Women's Fashion",
            text: 'Shop Now'
        },
        {
            img: "/items3.jpg",
            title: "Baby Fashion",
            text: 'Shop Now'
        }
    ]
  return (
    <div className='category_card_body'>
      <div className="c_wrapper">
       {
        category.map((i,index)=>(
            <div className="wrapper_card" key={index}>
                <img src={i.img} alt="" />
                <div className="text">
                    <h4>{i.title}</h4>
                    <p>{i.text}</p>
                </div>
            </div>
        ))
       }
      </div>
    </div>
  )
}

export default Category_card
