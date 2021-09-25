import Image from "next/image";
import React from "react";
import styles from "./footer.module.scss";
import logo from "../../../static/images/logo.svg";
import appStoreDownload from "../../../static/images/getitongoogleplay.png";
import playStoreDownload from "../../../static/images/downloadonappstore.png";

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footer}>
        <div>
          <Image src={logo} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </p>
          {/* <Image src={appStoreDownload} height="100px" width="100px" />
        <Image src={playStoreDownload} height="100px" width="100px"/> */}
        </div>
        <div>
          <h2>About Us</h2>
          <p>Careers</p>
          <p>Our Stores</p>
          <p>Our Cares</p>
          <p>Term & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h2>Customer Care</h2>
          <p>Help Center</p>
          <p>How to Buy</p>
          <p>Track Your Order</p>
          <p>Corporate & Bulk Purchasing</p>
          <p>Returns & Refunds</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>70 Washington Square South, New York, NY 10012, United States</p>
          <p>Email: uilib.help@gmail.com</p>
          <p>Phone: +1 1123 456 780</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
