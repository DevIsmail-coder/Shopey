import React, { useEffect, useState } from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import "./tranding.css"
import axios from 'axios';

const url = "https://express-buy.onrender.com/api/v1"

const Trending = () => {
    const token = localStorage.getItem('token')
     const [category, setCategory] = useState([])

    const trending=[
        {
            img: "/latest1.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        },
        {
            img: "/latest2.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        },
        {
            img: "/latest3.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        },
        {
            img: "/latest4.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        }
    ]

    const handleSubmit = async () => {
        try{
            const res = await axios.get(`${url}/allCategories`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res);
            setCategory(res?.data?.data || [])
        }  
        catch(err){
            console.log(err);
            
        }
     }
         console.log(category);

  return (
    <div className='tranding_body'>
      <div className="trending_wrapper">
        <div className="t_wrapper_header">
            <div className="t_left">
                <h2>Trending This Week</h2>
            </div>
            <div className="t_right" >
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
