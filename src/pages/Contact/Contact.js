import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">



      <section className="contact-main">

        <span className="contact-badge">
          Get In Touch
        </span>

        <h1>Contact Us</h1>

        <div className="contact-line"></div>

        <p>
          We'd love to hear from you. Reach out for any questions,
          support or business inquiries.
        </p>

      </section>

      <section className="contact-section">

        <div className="contact-info">

          <span className="section-tag">
            CONTACT DETAILS
          </span>

          <h2>Let's Connect</h2>

          <p>
            Our team is always ready to help you with product
            inquiries, orders and support.
          </p>

          <div className="info-box">

            <h4>Email</h4>

            <p>support@shopsphere.com</p>

          </div>

          <div className="info-box">

            <h4>Phone</h4>

            <p>+91 98765 43210</p>

          </div>

          <div className="info-box">

            <h4>Address</h4>

            <p>
              ShopSphere Pvt Ltd,
              Technopark, Kerala, India
            </p>

          </div>

        </div>

        <div className="contact-form-container">

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;