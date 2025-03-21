import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./choice.css";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const Choice = () => {
  const url = "https://express-buy.onrender.com/api/v1";
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${url}/allProducts`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchProducts();
    } else {
      setError("User not authenticated");
      setLoading(false);
    }
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="choice_body">
      <h2 className="slider-title">You May Like</h2>
      <Swiper modules={[Navigation, Pagination]} spaceBetween={20} slidesPerView={4} navigation>
        {products.map((product) => (
          <SwiperSlide key={product.id} className="product_card">
            <div className="product_img">
              <img src={product.image} alt={product.name} />
              <div className="card_actions">
                <div className="shop_action">
                  <div className="t_icons">
                    <TfiShoppingCart />
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