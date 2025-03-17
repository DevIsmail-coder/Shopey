import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="footer_wrapper">
            <div className="footer_header">
                <div className="footer_left">
                    <h3>Subscribe Newsletter</h3>
                    <p>Subscribe newsletter to get 5% on all products.</p>
                </div>
                <div className="footer_center">
                    <input type="text" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
                <div className="footer_right">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaYoutube/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
