import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {

  const navigate = useNavigate();

  return (
    <section className="hero-banner">

      <div className="hero-content">

        <h1>
          Discover Amazing Products
        </h1>

        <p>
          Shop quality products with secure payments,
          fast delivery and unbeatable prices.
        </p>

        <div className="hero-buttons">

          <button
            className="shop-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>

          <button
            className="explore-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default Banner;