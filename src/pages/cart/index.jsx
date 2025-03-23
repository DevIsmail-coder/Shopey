import React, { useEffect, useState } from 'react';
import './cart.css';
import { IoMdArrowDropdown } from "react-icons/io";
import axios from 'axios';


const url = "https://express-buy.onrender.com/api/v1"

const Cart = () => {
    const token = localStorage.getItem('token')
    const [allCart, setAllCart] = useState([])

    const handleProduct = async () => {
        if (!token) {
            console.error("No token found! User might be logged out.");
            return;
        }

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

    useEffect(() => {
        handleProduct()
    }, [token])

    const handleRemoveProduct = async (id) => {
        console.log("Removing product with ID:", id);
        try {
            const res = await axios.patch(`${url}/cart/reduce/${id}`, { quantity: 1 }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            handleProduct()
            console.log("Removing product with ID:", id);
            console.log(res);
                setAllCart(res?.data?.data?.products);

            console.log(res?.data?.data?.products);

            console.log("Cart API Response:", res?.data);
        }
        catch (err) {
            console.log(err);

        }
    }
    console.log(allCart);


    const handleDelete = async (id) => {
        console.log("Removing product with ID:", id);
        try {
            const res = await axios.delete(`${url}/cart/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            handleProduct()
            console.log(res);

        } catch (err) {
            console.log(err);

        }
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
                            <p className='descBoxp2'>Price</p>
                            <p className='descBoxp2'>Quantity</p>

                        <p className='descBoxp2'>Total</p>
                        <p className='descBoxp3'>Delete</p>
                    </div>


                    <main className='mainpropertyDiv'>

                        {
                            allCart.length > 0 && allCart.map((cart, index) => (
                                cart.products?.length > 0 && cart.products.map((product, _id) => (
                                    <div className='propertyDiv' key={`${index}-${_id}`}>
                                        {/* <div className='propertyDivA'> */}
                                           
                                            <p className='propertyDiv1'>{product.productName}</p>
                                            <p className='propertyDiv2'> ${product.unitPrice} </p>
                                        {/* </div> */}

                                        <div className='propertyDivB'>
                                            <div>
                                                <p className='propertyDivB1'>{product.quantity}</p>
                                            </div>

                                            <div className='propertyDivBtn'>
                                                <button>+</button>
                                                <button onClick={() => handleRemoveProduct(product.productId)}>-</button>
                                            </div>
                                        </div>
                                      
                                            <p className='totalDiv'>${product.unitTotal}</p>
                                    
                                        <span onClick={() => handleDelete(product.productId)} className='deletediv'>remove</span>
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