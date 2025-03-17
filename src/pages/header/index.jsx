import React, { useState } from 'react'
import "./header.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoMdTv } from "react-icons/io";
import { MdOutlineTabletMac } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiShoppingCartFill } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { PiShoppingCartLight } from "react-icons/pi";
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate()
    const [showDrop, setShowDrow] = useState()
    return (
        <div className='Headerbody'>
            <header className='Headerbodyxx' >
                <div className='Headerbodyxx1'>
                    <span className='Headerbodyxx1i'>colorlib<p>.</p></span>
                    <span className='Headerbodyxx1ii'><p>+</p>  FlexKicks</span>
                </div>
                <div className='Headerbodyxx2'>
                    <span className='iconsxx'> <IoMdTv /></span>
                    <span className='iconsxx'><MdOutlineTabletMac /></span>
                    <span className='iconsxx'><IoIosPhonePortrait /></span>
                    <span className='icons1xx'> <PiShoppingCartFill /></span>
                    <span className='iconsxx' ><FaTimes /> </span>
                </div>
            </header>
            <header className='Headerbody1'>
                <article className='Headerbody1container1'>
                    <p>About Us</p>
                    <p> Privacy</p>
                    <p>FAQ</p>
                    <p>Careers</p>
                </article>
                <article className='Headerbody1container2'>
                    <p>My Wishlist</p>
                    <p> Track Your Order</p>
                    <span className='Headerbody1container2span'>
                        <FaFacebook />
                        <FaInstagram />
                        <AiOutlineTwitter />
                        <RiLinkedinFill />
                        <FaYoutube />
                    </span>
                </article>
            </header>
            <header className='Headerbody2'>
                <article className='Headerbody2i'>
                    <span>
                        <img src="src/assets/public/loder.png" alt="" />
                    </span>
                    <p>FlexKicks</p>
                </article>
                <article className='Headerbody2ii'>
                    <span onClick={() => navigate("/")} >Home</span>
                    <span onClick={() => navigate("/menpage")}>Men</span>
                    <span onClick={() => navigate("/womenpage")}>Women</span>
                    <span onClick={() => navigate("/babypage")}>Baby Collection</span>
                    <span onMouse={() => setShowDrow(!showDrop)} className='Headerbody2iispan'>Pages 
                    {
                            showDrop &&
                            <div className='Headerbody2iidrop'>
                                <p onClick={() => navigate("/loginpage")}>login</p>
                                <p onClick={() => navigate("/cart")}>cart</p>
                                <p onClick={() => navigate("/detailspage")}>product details</p>
                                <p onClick={() => navigate("/checkout")}>product checkout</p>
                            </div>

                        }
                    </span>
                    <span onClick={() => navigate("/contact")}>Contact</span>

                </article>
                <article className='Headerbody2iii'>
                    <FiSearch className='headicons' />
                    <LuUserRound className='headicons' onClick={() => navigate("/loginpage")} />
                    <PiShoppingCartLight className='headicons' onClick={() => navigate("/cart")} />
                </article>
            </header>
            <header className='Headerbody3'>
                <span>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <p>Shop Now</p></span>
            </header>
        </div>
    )
}

export default Header
