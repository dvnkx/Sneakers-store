import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h1>Lace Store</h1>
      <div className="grid">
        <Link>About us</Link>
        <Link>Privacy Policy</Link>
        <Link>How to Order</Link>
        <Link>Faq</Link>
        <Link>Refund Policy</Link>
        <Link>How to Refund</Link>
        <Link>Contact us</Link>
        <Link>Terms of Service</Link>
        <Link>Track Your Order</Link>
        <Link>Products</Link>
        <Link>Customer Care</Link>
        <span />
        <Link>Career</Link>
      </div>
      <div className="join">
        <h2>Join Our Community</h2>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="ENTER YOUR EMAIL"
          />
          <label className="form__label">ENTER YOUR EMAIL</label>
        </div>
      </div>
      <div className="down">
        <div>
          <span />
        </div>
        <div className="links">
          <h3>© 2023 LACESTORE. All right reserved.</h3>
          <div>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Telegram</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
