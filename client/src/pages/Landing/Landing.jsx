import React from "react";
import "./styles.css";

import { ImgIntro } from "../../components/ui/index";
import {
  adidaslogo,
  nblogo,
  nikelogo,
  yeezylogo,
  background,
  example,
} from "../../assets/index.js";

const Landing = () => {
  return (
    <div className="container">
      <p>Discover limited sneakars without limitation</p>
      <div className="content">
        <div className="brand-intro">
          <ImgIntro
            alt={"new-balance"}
            logoAlt={"new-balance-logo"}
            src={
              "https://img.modivo.cloud/zoomapp(1/d/c/7/1dc7fa2a855f0aff675f66b350886a7196dbcaba_01_0000301874157_bs.jpg,webp)/new-balance-snikerci-m2002rea-golubii.webp"
            }
            logo={nblogo}
          />
          <ImgIntro
            alt={"nike"}
            logoAlt={"nike-logo"}
            src={
              "https://img.modivo.cloud/product(4/4/0/6/4406284951c301b5e1d1289d6ba16a49406b1061_0000201641316_03_ai,webp)/nike-vzuttia-air-jordan-1-mid-gs-554725-124-kolorovii.webp"
            }
            logo={nikelogo}
          />
          <ImgIntro
            alt={"adidas"}
            logoAlt={"adidas-logo"}
            src={
              "https://img.modivo.cloud/zoomapp(b/6/b/f/b6bfe624952001b52cb5fd7d59e10a47f273e612_0000209024753_08_ki.jpg,webp)/adidas-vzuttia-zx-700-hd-cf-c-gy3296-bilii.webp"
            }
            logo={adidaslogo}
          />
          <ImgIntro
            alt={"yeezy"}
            logoAlt={"yeezy-logo"}
            src={
              "https://werare.com.ua/image/cache/catalog/i/ek/gp/7d857fa92767740a89cccf02ea985f9c-890x1000.jpg"
            }
            logo={yeezylogo}
          />
        </div>
        <p className="text-intro">What are we talking about?</p>
        <div className="text-content">
          <p className="description">
            Welcome to our website! We are a premier destination for sneaker
            enthusiasts looking to add some heat to their collection. Our
            inventory includes a wide variety of the coolest and most highly
            coveted limited edition kicks, perfect for hypebeasts and
            sneakerheads alike.
            <br /> <br /> Our collection features some of the most sought-after
            sneakers in the world, including classic retros and the hottest
            collaborations. We understand the thrill of getting your hands on a
            rare pair of kicks, which is why we're committed to bringing you the
            best selection of limited edition sneakers from around the globe.{" "}
            <br /> <br />
            Our team is made up of dedicated sneakerheads who are passionate
            about footwear and the culture surrounding it. We work hard to
            ensure that our inventory is always up-to-date with the latest
            releases, so you can stay on top of the game and step up your
            sneaker game. <br /> <br /> We take pride in providing our customers
            with exceptional service and a seamless shopping experience. Our
            website is user-friendly and easy to navigate, allowing you to
            browse our selection with ease. We also offer fast and reliable
            shipping, so you can get your kicks delivered straight to your
            doorstep. <br /> <br /> Whether you're looking to add to your
            collection or are a new sneakerhead just starting out, we've got you
            covered. Check out our selection today and discover the perfect pair
            of sneakers to take your style to the next level.
          </p>
        </div>
        <p className="text-intro">Are they legit?</p>
      </div>
      <div className="legit">
        <img alt="example-img" src={example} className="example-img" />
        <h1>
          100% <br /> LEGIT
        </h1>
        <p className="item-1">1800 sold 🤑</p>
        <p className="item-2">Sheesh 🔥</p>
        <p className="item-3">Just do it 🤛</p>
        <h2>
          Our sneakers is 100% LEGIT. <br /> FAKE IS BULLSH*T
        </h2>
        <img alt="background" src={background} className="background" />
      </div>
      <div className="hot-cards"></div>
    </div>
  );
};

export default Landing;
