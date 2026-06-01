import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-main">

        <div className="main-content">

          <span className="main-badge">
            Trusted By Thousands
          </span>

          <h1>About ShopSphere</h1>

          <div className="main-line"></div>

          <p>
            Shop smarter with premium products, unbeatable prices,
            and a seamless online shopping experience.
          </p>

        </div>

      </section>

      <section className="about-section">

        <div className="about-text">

          <span className="section-tag">
            OUR STORY
          </span>

          <h2>Who We Are</h2>

          <p>
            ShopSphere is a modern e-commerce platform created to
            make online shopping simple, secure and enjoyable.
            We provide customers with a carefully selected collection
            of products across fashion, electronics, accessories and more.
          </p>

          <p>
            Our mission is to bring quality products to everyone
            while maintaining affordability, trust and exceptional
            customer service.
          </p>

        </div>

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200"
            alt="About ShopSphere"
          />

        </div>

      </section>

      <section className="stats-section">

        <div className="card">

          <h3>10K+</h3>

          <p>Happy Customers</p>

        </div>

        <div className="card">

          <h3>500+</h3>

          <p>Products</p>

        </div>

        <div className="card">

          <h3>24/7</h3>

          <p>Support</p>

        </div>

        <div className="card">

          <h3>100%</h3>

          <p>Secure Payments</p>

        </div>

      </section>

      <section className="mission">

        <h2>Our Mission</h2>

        <p>
          To make online shopping accessible, reliable and enjoyable
          for everyone by delivering high-quality products and
          outstanding customer service.
        </p>

      </section>

    </div>
  );
}

export default About;