import React from 'react';
import './cart.css';
import { IoMdArrowDropdown } from "react-icons/io";




const Cart = () => {
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



                    <div className='propertyDiv'>

                        <div className='propertyDivA'>
                            <span>|</span>
                            <p className='propertyDiv1'>Minimalistic shop for multipurpose use</p>

                            <p className='propertyDiv2'> $360.00 </p>

                        </div>

                        <div className='propertyDivB'>
                            <div>
                                <input className='propertyDivB1' type="text" />
                            </div>

                            <div className='propertyDivBtn'>
                                <button> +</button>
                                <button>-</button>
                            </div>

                        </div>

                        <div className='totalDiv'>
                            <p>$720.00</p>
                        </div>
                    </div>

                    <div className='propertyDiv'>

                        <div className='propertyDivA'>
                            <span>|</span>
                            <p className='propertyDiv1'>Minimalistic shop for multipurpose use</p>

                            <p className='propertyDiv2'> $360.00 </p>

                        </div>

                        <div className='propertyDivB'>
                            <div>
                                <input className='propertyDivB1' type="text" />
                            </div>

                            <div className='propertyDivBtn'>
                                <button> +</button>
                                <button>-</button>
                            </div>

                        </div>

                        <div className='totalDiv'>
                            <p>$720.00</p>
                        </div>
                    </div>


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
                             <p className='shipping2'>Free Shipping <input type="checkbox"/></p>
                             <p className='shipping2'>Flat Rate: $10.00 <input type="checkbox"/></p>
                             <p className='shipping2'>Local Delivery: $2.00 <input type="checkbox"/></p>
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