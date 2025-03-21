import React, { useEffect, useState } from 'react';
import './cart.css';
import { IoMdArrowDropdown } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router';


const url = "https://express-buy.onrender.com/api/v1"

const Cart = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [allCart, setAllCart] = useState([])

    useEffect(() => {

        const handleProduct = async () => {
            try {
                const res = await axios.get(`${url}/allCart`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log(res?.data?.data);
                setAllCart(res?.data?.data);
            }
            catch (err) {
                console.log(err);
    
            }
        }
        handleProduct()
    }, [])

    const handleMen =()=>{
        navigate("/menpage")
    }
    const handleWomen =()=>{
        navigate("/womenpage")
    }
    const handleChildren =()=>{
        navigate("/babypage")
    }

    return (
        <div className='cartBody'>
            <div className='cartMiddle'>
                <h2 className='middleName1'>Cart</h2>
                <div className='middlepMan'>
                    <p>Home</p>
                    <span>|</span>
                    <p>Cart</p>
                </div>
            </div>


            <div className='cartOrderpage'>

                <div className='cartorderBox'>
                    <div className='descBox1'>
                        <p className='descBoxp1'>Product</p>

                        <div className='descBox2'>
                            <p className='descBoxp2'>Price</p>
                            <p className='descBoxp2'>Quantity</p>
                        </div>

                        <p className='descBoxp3'>Total</p>
                    </div>


                    <main className='mainpropertyDiv'>

                        {
                            allCart.length > 0 && allCart.map((cart, index) => (
                                cart.products.length > 0 && cart.products.map((product, i) => (
                                    <div className='propertyDiv' key={`${index}-${i}`}>
                                        <div className='propertyDivA'>
                                            <span>|</span>
                                            <p className='propertyDiv1'>{product.productName}</p>
                                            <p className='propertyDiv2'> ${product.unitPrice} </p>
                                        </div>

                                        <div className='propertyDivB'>
                                            <div>
                                                <p className='propertyDivB1'>{product.quantity}</p>
                                            </div>

                                            <div className='propertyDivBtn'>
                                                <button>+</button>
                                                <button>-</button>
                                            </div>
                                        </div>

                                        <div className='totalDiv'>
                                            <p>${product.unitTotal}</p>
                                        </div>
                                    </div>
                                ))
                            ))
                        }

                    </main>


                    <div className='btnDivision'>
                        <div className='btnDivision1A'>
                            <button className='btnDivision1'>Update Cart</button>
                            <button className='btnDivision1'>Close Coupon</button>
                        </div>
                    </div>




                    <div className='subtotal'>
                        <p className='subtotal1'>Subtotal</p>
                        <p className='subtotal1'>$2160.00</p>

                    </div>



                    <div className='shipping'>
                        <div className='shipping1'>  <p className='shipping1A'>Shipping</p></div>



                        <div className='shippingDiv2'>
                            <p className='shipping2'>Flat Rate: $2160.00 <input type="checkbox" /></p>
                            <p className='shipping2'>Free Shipping <input type="checkbox" /></p>
                            <p className='shipping2'>Flat Rate: $10.00 <input type="checkbox" /></p>
                            <p className='shipping2'>Local Delivery: $2.00 <input type="checkbox" /></p>
                            <p className='shipping2'>Calculate Shipping  <IoMdArrowDropdown /></p>

                        </div>

                    </div>

                    <div className='divisionDiv'>
                        <input className='stateDivision' type="text" placeholder='Bangdalesh' />
                        <input className='stateDivision' type="text" placeholder='Select a State' />
                        <input className='stateCode' type="text" placeholder='Postcode/Zipcode' />
                        <button className='btnDivision3'> Update Details</button>
                    </div>


                    <div className='btnDivisionB'>
                        <div className='btnDivision1B'>
                            <button className='btnDivision1BA'>Continue Shopping</button>
                            <button className='btnDivision1BA'>Proceed to checkout</button>
                        </div>
                    </div>




                </div>





            </div>



        </div>


    );
}

export default Cart;