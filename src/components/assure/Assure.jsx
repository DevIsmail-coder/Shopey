import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import "./assure.css"
import { HiOutlineCreditCard } from 'react-icons/hi';
import { LiaIdCardSolid } from 'react-icons/lia';
import { Ri24HoursLine } from 'react-icons/ri';

const Assure = () => {
  return (
    <div className='assure_body'>
      <div className="assure_body_wrapper">
        <div className="icon_body">
            <TbTruckDelivery  className='assure_icon'/>
            <h4>Free & Fast Delivery</h4>
            <p>Free delivery On All Orders</p>
        </div>
        <div className="icon_body">
            <HiOutlineCreditCard  className='assure_icon'/>
            <h4>Secure Payment</h4>
            <p>Free delivery On All Orders</p>
        </div>
        <div className="icon_body">
            <LiaIdCardSolid  className='assure_icon'/>
            <h4>Money Bank Guarantee</h4>
            <p>Free delivery On All Orders</p>
        </div>
        <div className="icon_body">
            <Ri24HoursLine  className='assure_icon'/>
            <h4>Online Support </h4>
            <p>Free delivery On All Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Assure
