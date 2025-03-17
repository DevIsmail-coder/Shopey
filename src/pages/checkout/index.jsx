import React from 'react'
import "./checkout.css"

const Checkout = () => {
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
            <input type="text" className='input_area' />
            <input type="text" className='input_area' />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
