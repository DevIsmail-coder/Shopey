import React, { useEffect, useState } from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./women.css"
import axios from 'axios';

const url = "https://express-buy.onrender.com/api/v1"
const Women = () => {
    const token = localStorage.getItem('token')
    const storedCategoryIDs = JSON.parse(localStorage.getItem("categoryIDs")) || [];
    const firstId = storedCategoryIDs.length > 0 ? storedCategoryIDs[0] : null

    console.log(firstId);
    const [womenproducts, setWomenproducts] = useState([])
    const [show, setShow] = useState(null)

    const showing = (key) => {
        setShow(currentDiv => currentDiv === key ? null : key)
    }



    const handleSubmit = async () => {
        try {
            const res = await axios.get(`${url}/category/${firstId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res);
            setWomenproducts(res?.data.data?.productIds || []);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleSubmit()
    }, [])

    const handleCart = async (id) => {
        try {
            const res = await axios.post(`${url}/cart/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res)
        }
        catch(err){
console.log(err);

        }
    }

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
                            womenproducts.length > 0 ?
                                (
                                    womenproducts.map((i, _id) => (
                                        <div className="Womenpagediv2containerii" key={_id}>
                                            <div className="Menimgholder">
                                                <div className='Womenimgholderimgcov'>
                                                    <img src={i.productImage.imageUrl} alt="" />
                                                </div>

                                                <div className="menaction">
                                                    <div className="menactioni">
                                                        <div className="menactionixx">
                                                            <TfiShoppingCart className='menicons' onClick={() => handleCart(i._id)}/>
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
                                            <h4>{i.description}</h4>
                                            <div className="pricetag">
                                                <p>{i.price}</p>
                                                <p>{i.previous_price}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>no product available</p>
                                )
                        }
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Women
