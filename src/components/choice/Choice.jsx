import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./choice.css";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

// Sample Product Data
const products = [
  {
    id: 1,
    image: "/src/assets/public/latest5.jpg",
    name: "Go Fuzz Free Moisturizer",
    price: "$83.00",
    oldPrice: "$120.00",
  },
  {
    id: 2,
    image: "/src/assets/public/latest6.jpg",
    name: "Curology Skincare",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 3,
    image: "/src/assets/public/latest7.jpg",
    name: "Men’s Outfit Collection",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 4,
    image: "/src/assets/public/latest8.jpg",
    name: "Smart Watch",
    price: "$98.00",
    oldPrice: "$120.00",
  },
  {
    id: 5,
    image: "/src/assets/public/latest4.jpg",
    name: "Smart Watch",
    price: "$98.00",
    oldPrice: "$120.00",
  },
];

const Choice = () => {
  return (
    <div className="choice_body">
      <h2 className="slider-title">You May Like</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product_card">
            <div className="product_img">
                <img src={product.image} alt="" />
                <div className="card_actions">
                    <div className="shop_action">
                        <div className="t_icons">
                            <TfiShoppingCart/>
                        </div>
                        <div className="t_icons">
                            <IoMdHeartEmpty />
                         </div>
                        <div className="t_icons">
                            <BiSearch />
                        </div>
                    </div>
                 </div>
            </div>
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">
              {product.price} <span className="old-price">{product.oldPrice}</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Choice;
