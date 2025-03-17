import React from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import "./tranding.css"

const Trending = () => {
    const trending=[
        {
            img: "/src/assets/public/latest1.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        },
        {
            img: "/src/assets/public/latest2.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        },
        {
            img: "/src/assets/public/latest3.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        },
        {
            img: "/src/assets/public/latest4.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        }
    ]

  return (
    <div className='tranding_body'>
      <div className="trending_wrapper">
        <div className="t_wrapper_header">
            <div className="t_left">
                <h2>Trending This Week</h2>
            </div>
            <div className="t_right">
                <h4>Men</h4>
                <h4>Women</h4>
                <h4>Baby</h4>
                <h4>Fashion</h4>
            </div>
        </div>
        <div className="trending_card_container">
           {
                trending.map((i,index)=>(
                     <div className="trending_card" key={index}>
                         <div className="t_img_holder">
                            <img src={i.img} alt="" />

                            <div className="card_action">
                                <div className="shop_action">
                                   <div className="t_icons">
                                   <TfiShoppingCart/>
                                   </div>
                                   <div className="t_icons">
                                   <IoMdHeartEmpty />
                                   </div>
                                    <div className="t_icons">
                                    <BiSearch />
                                    </div>
                                </div>
                            </div>
                         </div>
                            <h4>{i.title}</h4>
                           <div className="price">
                           <p>{i.price}</p>
                           <p>{i.previous_price}</p>
                           </div>
                     </div>
                ))
           }
        </div>
      </div>
    </div>
  )
}

export default Trending
