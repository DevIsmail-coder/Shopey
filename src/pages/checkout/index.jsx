import React, { useState } from 'react'
import "./checkout.css"
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Checkout = () => {
  const [password, setShowpass]= useState(false)
  const [drop, setDrop]=useState(false)
  const [district, setDistrict]= useState(false)

  const handleToggleCategory=()=>{
    setDrop((prev)=> !prev)
  }
  const handleToggleDistrict=()=>{
    setDistrict((prev)=> !prev)
  }
  return (
    <div className='checkout_body'>
      <div className="checkut_hero">
        <h2>Checkout</h2>
        <div className="hero_direct">
          <p>Home</p>
          <p>|</p>
          <p>Checkout</p>
        </div>
      </div>
      <div className="checkout_wrapper">
        <div className="register_tab">
          <div className="r_tab">
            <p>Returning Customer? <span>Click here to join</span></p>
          </div>
          <div className="r_tab_body">
          <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
          <div className="input_field">
            <input type="text" className='input_area' placeholder='Usernanme or Email' />
            <input type={password ? "password": "text"} className='input_area' placeholder='Password'/>
          </div>
          <div className="tab_action">
            <button className='tab_button'>log in</button>
            <input type="checkbox" className='tab_checkbox'/>
            <p>Create an Account?</p>
          </div>
          </div>
        </div>
        <div className="register_tab">
          <div className="r_tab">
            <p>Have a coupon? <span>Click here to enter your code</span></p>
          </div>
          <div className="r_tab_body">
          <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
          <div className="input_field">
            <input type="text" className='coupon_input_area' placeholder='Enter Coupon Code' />
          </div>
          <div className="tab_action">
            <button className='coupon_button'>Apply Coupon</button>
          </div>
          </div>
        </div>
        <div className="billing_details">
          <div className="billing_card">
            <div className="name_input">
              <input type="text" className='input_area' placeholder='First Name'/>
              <input type="text" className='input_area' placeholder='Last Name'/>
            </div>
            <div className="company_input">
              <input type="text" className='company' placeholder='Company Name'/>
            </div>
            <div className="name_input">
              <input type="text" className='input_area' placeholder='Phone Number'/>
              <input type="email" className='input_area' placeholder='Email address'/>
            </div>
               <div className="category" onClick={handleToggleCategory}>
                <p>Country</p>
                <MdOutlineKeyboardArrowDown  className='arrow_down'/>
                {
                  drop? 
                  <div className="category_menu">
                    <p>Nigeria</p>
                    <p>Ukraine</p>
                    <p>Qatar</p>
                    <p>Canada</p>
                  </div> :
                  null
                }
                </div>
                <div className="address_card">
                <input type="text" className='address_input' placeholder='Address line 01'/>
                <input type="text" className='address_input' placeholder='Address line 02'/>
                <input type="text" className='address_input' placeholder='Town/City'/>
                <div className="category" onClick={handleToggleDistrict}>
                <p>Country</p>
                <MdOutlineKeyboardArrowDown  className='arrow_down'/>
                {
                  district? 
                  <div className="category_menu">
                    <p>Ikeja</p>
                    <p>Carlifonia</p>
                    <p>United Arab</p>
                    <p>Kora</p>
                  </div> :
                  null
                }
                </div>
              </div>
              <div className="last_input">
                <input type="text" className='postcode_input' placeholder='Postcode/Zip' />
                <div className="acct_create">
                  <input type="checkbox"  className='tab_checkbox'/>
                  <p>Create an account?</p>
                </div>
                <h4>Shipping Details</h4>
                <div className="acct_create">
                  <input type="checkbox"  className='tab_checkbox'/>
                  <p>Ship to a different address?</p>
                </div>
                <textarea name="" className='notes' placeholder='Order notes'></textarea>
              </div>
          </div>
          <div className="order_details"></div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
