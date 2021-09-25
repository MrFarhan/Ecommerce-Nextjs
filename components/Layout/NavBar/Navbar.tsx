import React from "react";
import styles from "./Navbar.module.scss";
import {
  navItemHome,
  navItemPages,
  navItemUserAccount,
  navItemVender,
} from "./Navbar.helper";

const Navbar = () => {
  return (
    <div className={styles.navbarMain}>
      <nav>
        <ul>
          <span className={styles.navHome}>
            Home
            <ul>
              {navItemHome?.map((item, index) => {
                return <li>{item?.heading}</li>;
              })}
            </ul>
          </span>
          <span className={styles.navPages}>
            Pages{" "}
            <ul>
              {navItemPages?.map((item, index) => {
                return <li>{item?.heading}</li>;
              })}
            </ul>
          </span>
          <span className={styles.navUserAccount}>
            User Account{" "}
            <ul>
              {navItemUserAccount?.map((item, index) => {
                return <li>{item?.heading}</li>;
              })}
            </ul>
          </span>
          <span className={styles.navVendor}>
            Vendor{" "}
            <ul>
              {navItemVender?.map((item, index) => {
                return <li>{item?.heading}</li>;
              })}
            </ul>
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
