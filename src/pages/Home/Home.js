import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {

  const navigate = useNavigate();

  return (
    <>

      <Carousel fade>

        <Carousel.Item>

          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Fashion Sale"
          />

          <Carousel.Caption>

            <h1>
              Big Fashion Sale
            </h1>

            <p>
              Up to 50% OFF on Premium Products
            </p>

            <button
              className="shop-btn"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>

          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            alt="Electronics"
          />

          <Carousel.Caption>

            <h1>
              Latest Electronics
            </h1>

            <p>
              Best Deals Available Today
            </p>

            <button
              className="shop-btn"
              onClick={() => navigate("/products")}
            >
              Explore Now
            </button>

          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>

      <section className="offers-section">

        <div className="offer-card">

          <div className="offer-icon">
            🔥
          </div>

          <h2>
            50% OFF
          </h2>

          <p>
            Electronics Sale
          </p>

        </div>

        <div className="offer-card">

          <div className="offer-icon">
            🚚
          </div>

          <h2>
            Free Delivery
          </h2>

          <p>
            Orders Above ₹999
          </p>

        </div>

        <div className="offer-card">

          <div className="offer-icon">
            ✨
          </div>

          <h2>
            New Arrivals
          </h2>

          <p>
            Latest Fashion Trends
          </p>

        </div>

      </section>

      <section className="categories-section">

        <h2 className="section-title">
          Shop By Category
        </h2>

        <div className="categories-container">

          <div className="category-card">
            <span>👔</span>
            <h3>Men's Fashion</h3>
          </div>

          <div className="category-card">
            <span>👗</span>
            <h3>Women's Fashion</h3>
          </div>

          <div className="category-card">
            <span>💍</span>
            <h3>Jewelry</h3>
          </div>

          <div className="category-card">
            <span>💻</span>
            <h3>Electronics</h3>
          </div>

        </div>

      </section>

    </>
  );
}

export default Home;