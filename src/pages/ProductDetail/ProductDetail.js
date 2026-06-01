import { useEffect, useState, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import { CartContext } from "../../context/CartContext";

import { getSingleProduct } from "../../services/Api";

import "./ProductDetail.css";

function ProductDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {

    loadProduct();

  }, []);

  const loadProduct = async () => {

    const data = await getSingleProduct(id);

    setProduct(data);
  };

  const handleAddToCart = () => {

    addToCart(product);

    // alert("Product Added To Cart");
  };

  const handleBuyNow = () => {

    addToCart(product);

    navigate("/cart");
  };

  if (!product) {

    return <h1 className="loading">Loading...</h1>;
  }

  return (

    <div className="product-detail-page">

      <div className="product-detail-card">

        <div className="product-detail-left">

          <div className="image-container">

            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />

          </div>

          <div className="product-buttons">

            <button
              className="cart-btn"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>

            <button
              className="buy-btn"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

          </div>

        </div>

        <div className="product-detail-right">

          <p className="product-category">
            {product.category}
          </p>

          <h1 className="product-title">
            {product.title}
          </h1>

          <div className="rating-box">

            <span>
              {product.rating.rate}
            </span>

            <FaStar />

          </div>

          <div className="price-section">

            <h2 className="product-price">
              ₹ {product.price}
            </h2>

            <span className="original-price">
              ₹ {(product.price + 50).toFixed(2)}
            </span>

            <span className="discount">
              20% OFF
            </span>

          </div>

          <p className="delivery">
            Free Delivery Available
          </p>

          <div className="description-section">

            <h3>
              Product Description
            </h3>

            <p className="description">
              {product.description}
            </p>

          </div>

          <div className="offers-section">

            <h3>
              Available Offers
            </h3>

            <ul>

              <li>
                Bank Offer: 10% Instant Discount
              </li>

              <li>
                Special Price: Extra ₹100 Off
              </li>

              <li>
                Free Delivery on Orders Above ₹499
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ProductDetail;