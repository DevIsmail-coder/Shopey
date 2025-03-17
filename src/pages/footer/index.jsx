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
            <div className="footer_body">
                <div className="footer_body_wrapper">
                    <div className="footer_body_content">
                        <div className="footer_content">
                            <h4>Shop Men</h4>
                            <div className="footer_content_body">
                            <p>Clothing Fashion</p>
                            <p>winter</p>
                            <p>Summer</p>
                            <p>Formal</p>
                            <p>Casual</p>
                            </div>
                        </div>
                        <div className="footer_content">
                            <h4>Shop Women</h4>
                            <div className="footer_content_body">
                            <p>Clothing Fashion</p>
                            <p>winter</p>
                            <p>Summer</p>
                            <p>Formal</p>
                            <p>Casual</p>
                            </div>
                        </div>
                        <div className="footer_content">
                            <h4>Baby Collection</h4>
                            <div className="footer_content_body">
                            <p>Clothing Fashion</p>
                            <p>winter</p>
                            <p>Summer</p>
                            <p>Formal</p>
                            <p>Casual</p>
                            </div>
                        </div>
                        <div className="footer_content">
                            <h4>Quick Links</h4>
                            <div className="footer_content_body">
                            <p>Clothing Fashion</p>
                            <p>winter</p>
                            <p>Summer</p>
                            <p>Formal</p>
                            <p>Casual</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
