import React from "react";
import CustomLink from "../ui/CustomLink";

import "./styles.css";
import { Input } from "../ui";

const Footer = () => {
  return (
    <footer>
      <h1>Lace Store</h1>
      <div className="grid">
        <CustomLink>About us</CustomLink>
        <CustomLink>Privacy Policy</CustomLink>
        <CustomLink>How to Order</CustomLink>
        <CustomLink>Faq</CustomLink>
        <CustomLink>Refund Policy</CustomLink>
        <CustomLink>How to Refund</CustomLink>
        <CustomLink>Contact us</CustomLink>
        <CustomLink>Terms of Service</CustomLink>
        <CustomLink>Track Your Order</CustomLink>
        <CustomLink>Products</CustomLink>
        <CustomLink>Customer Care</CustomLink>
        <span />
        <CustomLink>Career</CustomLink>
      </div>
      <div className="join">
        <h2>Join Our Community</h2>
        <Input
          placeholder={"ENTER YOUR EMAIL"}
          label={"ENTER YOUR EMAIL"}
          type={"email"}
        />
      </div>
      <div className="bottom">
        <div>
          <span />
        </div>
        <div className="links">
          <h3>© 2023 LACESTORE. All right reserved.</h3>
          <div>
            <CustomLink>Instagram</CustomLink>
            <CustomLink>Twitter</CustomLink>
            <CustomLink>Telegram</CustomLink>
            <CustomLink>LinkedIn</CustomLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
