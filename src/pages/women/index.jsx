import React, { useState } from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./women.css"

const Women = () => {
     const [show, setShow] = useState(null)
  
      const showing = (key) => {
          setShow(currentDiv => currentDiv === key ? null : key)
      }

  const Menproducts = [
    {
        id: 1,
        img: "/latest1.jpg",
        title: "Cahsmere Sweater + Shoe",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 2,
        img: "/latest6.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 3,
        img: "/items2.jpg",
        title: "Cahsmere Sweater + Belt",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 4,
        img: "/latest8.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 5,
        img: "/latest4.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$98.00",
        oldPrice: "$120.00",
    },
    {
        id: 6,
        img: "/latest1.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 7,
        img: "/latest2.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 8,
        img: "/latest3.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 9,
        img: "/latest5.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 9,
        img: "/latest5.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    },
    {
        id: 9,
        img: "/latest5.jpg",
        title: "Cahsmere Sweater + Bag",
        price: "$200",
        previous_price: "$300"
    }
];

return (
    <div className='Menpagebody'>
        <article className='Menpageheader'>
            <h2 className='Menpageheaderh2x'>Category</h2>
            <span className='Menpageheaderh2xspan'>
                <p className='Menpageheaderh2xspanp'>Home</p>
                <p>Category</p>
            </span>
        </article>
        <main className='Womenpage'>
                         <article className='Womenpagediv1'>
                                <div className='Womenpagediv1i'>
                                    <span>Category <MdOutlineKeyboardArrowDown className={`Womenpagediv1iicon ${show === "Category" ? "open" : ""}`}
                                        onClick={() => showing("Category")}
                                    />
            
                                        {
                                            show === "Category" && (
                                                <div className='Womenpagediv1iiconyy'>
                                                    <h3>Category</h3>
                                                    <p className='Womenpagediv1iicon1p'>Category 1</p>
                                                    <p className='Womenpagediv1iicon1p'>Category 2</p>
                                                    <p className='Womenpagediv1iicon1p'>Category 3</p>
                                                    <p className='Womenpagediv1iicon1p'>Category 4</p>
                                                </div>
                                            )}
            
                                    </span>
                                    <span>Type  <MdOutlineKeyboardArrowDown className={`Womenpagediv1iicon ${show === "Type" ? "open" : ""}`}
                                        onClick={() => showing("Type")}
                                    />
                                        {
                                            show === "Type" && (
                                                <div className='Womenpagediv1iiconyy'>
                                                    <h3>Type</h3>
                                                    <p className='Womenpagediv1iicon1p'>Type 1</p>
                                                    <p className='Womenpagediv1iicon1p'>Type 2</p>
                                                    <p className='Womenpagediv1iicon1p'>Type 3</p>
                                                    <p className='Womenpagediv1iicon1p'>Type 4</p>
                                                </div>
                                            )
                                        }
                                    </span>
                                    <span>Size  <MdOutlineKeyboardArrowDown className={`Womenpagediv1iicon ${show === "Size" ? "open" : ""}`}
                                        onClick={() => showing("Size")}
                                    />
                                        {
                                            show === "Size" && (
                                                <div className='Womenpagediv1iiconyy'>
                                                    <h3>Size</h3>
                                                    <p className='Womenpagediv1iicon1p'>Size 1</p>
                                                    <p className='Womenpagediv1iicon1p'>Size 2</p>
                                                    <p className='Womenpagediv1iicon1p'>Size 3</p>
                                                    <p className='Womenpagediv1iicon1p'>Size 4</p>
                                                </div>
                                            )
                                        }
                                    </span>
                                    <span>Color  <MdOutlineKeyboardArrowDown className={`Womenpagediv1iicon ${show === "Color" ? "open" : ""}`}
                                        onClick={() => showing("Color")}
                                    />
                                        {
                                            show === "Color" &&
                                            <div className='Womenpagediv1iiconyy'>
                                                <h3>Color</h3>
                                                <p className='Womenpagediv1iicon1p'>Color 1</p>
                                                <p className='Womenpagediv1iicon1p'>Color 2</p>
                                                <p className='Womenpagediv1iicon1p'>Color 3</p>
                                                <p className='Womenpagediv1iicon1p'>Color 4</p>
                                            </div>
            
                                        }
                                    </span>
                                </div>
                                <h3 className='Womenpagediv1h3'>Filter by Price</h3>
                                <article className='Womenpagediv1xx'>
            
                                </article>
            
                                <article className='Womenpagediv1xxx' >
                                    <h3>Filter by Genres</h3>
                                    <div className='Womenpagediv1xxxdiv'>
                                        <p>History</p>
                                        <p>Horror-Thriller</p>
                                        <p>Love-Stories</p>
                                        <p>Science Fiction</p>
                                        <p>Biography</p>
                                    </div>
                                </article>
                                
                                <article className='Womenpagediv1xxx' >
                                    <h3>Filter by Brand</h3>
                                    <div className='Womenpagediv1xxxdiv'>
                                        <p>Green Publications</p>
                                        <p>Anondo Publications</p>
                                        <p>Rinku Publications</p>
                                        <p>Sheba Publications</p>
                                        <p>Red Publications</p>
                                    </div>
                                </article>
                            </article>
            <article className='Womenpagediv2'>
                <div className="Womenpagediv2container">
                    {
                        Menproducts.map((i) => (
                            <div className="Womenpagediv2containerii" key={i.id}>
                                <div className="Menimgholder">
                                    <div className='Womenimgholderimgcov'>
                                    <img src={i.img} alt="" />
                                    </div>

                                    <div className="menaction">
                                        <div className="menactioni">
                                            <div className="menactionixx">
                                                <TfiShoppingCart className='menicons'/>
                                            </div>
                                            <div className="menactionixx">
                                                <IoMdHeartEmpty />
                                            </div>
                                            <div className="menactionixx">
                                                <BiSearch />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4>{i.title}</h4>
                                <div className="pricetag">
                                    <p>{i.price}</p>
                                    <p>{i.previous_price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </article>
        </main>
    </div>
)
}

export default Women
