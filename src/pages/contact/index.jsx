import React from 'react'
import './contact.css'
import { CgDanger } from "react-icons/cg";
import { TfiHome } from "react-icons/tfi";
import { FaTabletAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";





const Contact = () => {
    return (
        <div className='contactBody'>
          
            <div className='contactMiddle'>
                <h2 className='middleName1'>Contact</h2>
                <div className='middlepMan'>
                    <p>Home</p>
                    <span>|</span>
                    <p>Contact</p>

                </div>
            </div>


            <div className='mapBody'>
                <div className='mapItself'>
                    <CgDanger size={50} color='gray' />
                    <h2 className='oopsDiv'>Oops! Something went wrong</h2>
                    <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>

                </div>

            </div>



            <div className='lastDiv'>
                <div className='lastDivBox'>

                    <div className='lastDivquarters'>
                        <h1>Get in touch</h1>
                        <textarea name="" id="Enter Message"></textarea>

                        <div className='inputHold'>
                            <input className='nameHold' type="text" placeholder='Enter your name' />
                            <input className='nameHold' type="text" placeholder='Email' />
                        </div>
                        <div className='inputHoldsubject'>
                            <input className='subjectHold' type="text" placeholder='Email' />
                        </div>

                        <button className='sendClick'>SEND </button>
                    </div>

                    <div className='lastdivRight'>
                        <div className='addressDiv'>
                            <div className='boxBox'>
                                <TfiHome size={30} color='gray' />
                                <div className='pBox'>
                                <p className='topTier'> Buttonwood, California.</p>
                                <p className='bottomTier'> Rosemead, CA 91770 </p>
                                </div>
                            </div>

                            <div className='boxBox'>
                                <FaTabletAlt size={30} color='gray' />
                               <div className='pBox'>
                               <p className='topTier'>+1 253 565 2365 </p>
                               <p className='bottomTier'>Mon to Fri 9am to 6pm </p>
                               </div>
                            </div>
                            <div className='boxBox'>
                                <TfiEmail size={30} color='gray' />
                                <div className='pBox'>
                                <p className='topTier'>support@colorlib.com</p>
                                <p className='bottomTier'>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact
