import React, { useEffect, useState } from 'react'
import "./category_card.css"
import axios from 'axios'

const url = "https://express-buy.onrender.com/api/v1"

const Category_card = () => {
    const token = localStorage.getItem('token')
    const [category, setCategory] = useState([])

    const  hel =[
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
      
     const handleSubmit = async () => {
        try{
            const res = await axios.get(`${url}/allCategories`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const allCategories = res?.data?.data || []
            setCategory(allCategories)
          
            const categoryIDs = allCategories.map((i => i._id))
            localStorage.setItem("categoryIDs", JSON.stringify(categoryIDs));

        console.log("Saved category IDs:", allCategories.map(i => i._id));
        }  
        catch(err){
            console.log(err); 
        }
     }
         console.log(category);
         
         useEffect(() => {
            handleSubmit()
         }, [])

  return (
    <div className='category_card_body'>
      <form className="c_wrapper">
       {
        category.length > 0 ? (
            category.map((i,id) => (
                <div className="wrapper_card" key={id}>
                    <img src= "/items2.jpg"  alt="" />
                    <div className="text">
                        <h4>{i.name}</h4>
                        <p>$1500</p>
                    </div>
                </div>
            ))
        ): (
            <p>No categories available</p>
        )
       }
      </form>
    </div>
  )
}

export default Category_card
