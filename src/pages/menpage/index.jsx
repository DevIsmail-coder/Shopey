import React, { useState } from 'react'
import "./menpage.css"
import { TfiShoppingCart } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Menpage = () => {

    const [show, setShow] = useState(null)

    const showing = (key) => {
        setShow(currentDiv => currentDiv === key ? null : key)
    }

    const Menproducts = [
        {
            id: 1,
            img: "/latest5.jpg",
            title: "Cahsmere Sweater + Bag",
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
            img: "/latest7.jpg",
            title: "Cahsmere Sweater + Bag",
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
            img: "/latest4.jpg",
            title: "Cahsmere Sweater + Bag",
            price: "$200",
            previous_price: "$300"
        }
    ];

    return (
        <div className='Menpagebody'>
            <article className='Menpageheader'>
                <h2>Category</h2>
                <span>
                    <p>Home</p>
                    <p>Category</p>
                </span>

            </article>
            <main className='Menpagemain'>
                <article className='Menpagemaindiv1'>
                    <div className='Menpagemaindiv1i'>
                        <span>Category <MdOutlineKeyboardArrowDown className={`Menpagemaindiv1iicon ${show === "Category" ? "open" : ""}`}
                            onClick={() => showing("Category")}
                        />

                            {
                                show === "Category" && (
                                    <div className='Menpagemaindiv1iiconyy'>
                                        <h3>Category</h3>
                                        <p className='Menpagemaindiv1iicon1p'>Category 1</p>
                                        <p className='Menpagemaindiv1iicon1p'>Category 2</p>
                                        <p className='Menpagemaindiv1iicon1p'>Category 3</p>
                                        <p className='Menpagemaindiv1iicon1p'>Category 4</p>
                                    </div>
                                )}

                        </span>
                        <span>Type  <MdOutlineKeyboardArrowDown className={`Menpagemaindiv1iicon ${show === "Type" ? "open" : ""}`}
                            onClick={() => showing("Type")}
                        />
                            {
                                show === "Type" && (
                                    <div className='Menpagemaindiv1iiconyy'>
                                        <h3>Type</h3>
                                        <p className='Menpagemaindiv1iicon1p'>Type 1</p>
                                        <p className='Menpagemaindiv1iicon1p'>Type 2</p>
                                        <p className='Menpagemaindiv1iicon1p'>Type 3</p>
                                        <p className='Menpagemaindiv1iicon1p'>Type 4</p>
                                    </div>
                                )
                            }
                        </span>
                        <span>Size  <MdOutlineKeyboardArrowDown className={`Menpagemaindiv1iicon ${show === "Size" ? "open" : ""}`}
                            onClick={() => showing("Size")}
                        />
                            {
                                show === "Size" && (
                                    <div className='Menpagemaindiv1iiconyy'>
                                        <h3>Size</h3>
                                        <p className='Menpagemaindiv1iicon1p'>Size 1</p>
                                        <p className='Menpagemaindiv1iicon1p'>Size 2</p>
                                        <p className='Menpagemaindiv1iicon1p'>Size 3</p>
                                        <p className='Menpagemaindiv1iicon1p'>Size 4</p>
                                    </div>
                                )
                            }
                        </span>
                        <span>Color  <MdOutlineKeyboardArrowDown className={`Menpagemaindiv1iicon ${show === "Color" ? "open" : ""}`}
                            onClick={() => showing("Color")}
                        />
                            {
                                show === "Color" &&
                                <div className='Menpagemaindiv1iiconyy'>
                                    <h3>Color</h3>
                                    <p className='Menpagemaindiv1iicon1p'>Color 1</p>
                                    <p className='Menpagemaindiv1iicon1p'>Color 2</p>
                                    <p className='Menpagemaindiv1iicon1p'>Color 3</p>
                                    <p className='Menpagemaindiv1iicon1p'>Color 4</p>
                                </div>

                            }
                        </span>
                    </div>
                    <h3 className='Menpagemaindiv1h3'>Filter by Price</h3>
                    <article className='Menpagemaindiv1xx'>

                    </article>

                    <article className='Menpagemaindiv1xxx' >
                        <h3>Filter by Genres</h3>
                        <div className='Menpagemaindiv1xxxdiv'>
                            <p>History</p>
                            <p>Horror-Thriller</p>
                            <p>Love-Stories</p>
                            <p>Science Fiction</p>
                            <p>Biography</p>
                        </div>
                    </article>
                    
                    <article className='Menpagemaindiv1xxx' >
                        <h3>Filter by Brand</h3>
                        <div className='Menpagemaindiv1xxxdiv'>
                            <p>Green Publications</p>
                            <p>Anondo Publications</p>
                            <p>Rinku Publications</p>
                            <p>Sheba Publications</p>
                            <p>Red Publications</p>
                        </div>
                    </article>
                </article>
                <article className='Menpagemaindiv2'>
                    <div className="Menpagemaindiv2container">
                        {
                            Menproducts.map((i) => (
                                <div className="Menpagemaindiv2containerii" key={i.id}>
                                    <div className="Menimgholder">
                                        <img src={i.img} alt="" />

                                        <div className="menaction">
                                            <div className="menactioni">
                                                <div className="menactionixx">
                                                    <TfiShoppingCart className='menicons' />
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

export default Menpage
