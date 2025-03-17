import React, { useState } from "react";
import "./details.css";
import { MdOutlineStarHalf, MdOutlineStar } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa"; 



const tabs = ["Description", "Author", "Comments", "Review"];

const content = {
  Description:(
  <>
    Beryl Cook is one of Britain’s most talented and amusing artists. Beryl’s pictures feature women of all shapes and sizes enjoying themselves. Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next-door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband.

It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
    </>
  ),
  
  Author: 
  (<>Ismail Muhammad is a writer and critic living in Oakland, California. His writing has appeared in Slate, the Los Angeles Times, the New Republic, and other publications. He is a staff writer at the Millions, a contributing editor at ZYZZYVA, and a board member of the National Book Critics Circle. He is the recipient of a 2019 Arts Writers Grant from Creative Capital/the Andy Warhol Foundation.</>),
  Comments: (
    <>Beryl Cook is one of Britain’s most talented and amusing artists. Beryl’s pictures feature women of all shapes and sizes enjoying themselves. Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next-door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband.

    It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
    
    
    </>
  ),
  Review: (
    <>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, quasi dolor. Aliquam laudantium eveniet eum? Ut ducimus rem, nulla eligendi ab placeat esse totam nihil id. Optio hic voluptatum facere.
    </>
  )
};

const Details = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className='details'>
      <div className="breadcrumb-container">
        <h1>Product Details</h1>
        <p>
          <a href="/">Home</a> | Product Details
        </p>       
      </div>
      <div className="product-card">
        <img
          src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg"
          alt="Product"
          className="product-image"
        />
        <div className="product-info">
          <h2>The Rage of Dragons</h2>
          <p className="author">By Evan Winter</p>
          <p className="price">$50.00</p>
          <div className="rating">
            <MdOutlineStar/><MdOutlineStar/><MdOutlineStar/><MdOutlineStar/><MdOutlineStarHalf/><span>(120 Reviews)</span>
          </div>
          <div className="buttons">
            <button className="cart-button">Add To Cart</button>
            <button className="share-button"><FaShareAlt/></button>
          </div>
        </div>
      </div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">
        <p>{content[activeTab]}</p>
      </div>
    </div>
  );
};

export default Details;
