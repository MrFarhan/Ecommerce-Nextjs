import React from "react";
import styles from "./NavbarMobile.module.scss";
import { navItemsMobile } from ".././Navbar.helper";

const NavbarMobile = () => {
  return (
    <div className={styles.navMobileMain}>
      <nav>
        <ul>
          {navItemsMobile?.map((item, index) => {
            return (
              <li key={index}>
                <div className={styles.navItems}>
                  {item.heading}
                  {item?.icon}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMobile;
