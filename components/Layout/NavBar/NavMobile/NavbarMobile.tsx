import React from "react";
import styles from "./NavbarMobile.module.scss";
import { navItemsMobile } from ".././Navbar.helper";
import Badge from "../../../Badge/Badge";
import { useSelector } from "react-redux";

const NavbarMobile = () => {
  const state = useSelector((state) => state);
  const reduxCounter = state?.counter;
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
                  {item?.heading === "Cart" && (
                    <span className={styles.badgeCount}>
                      <Badge
                        content={reduxCounter}
                        width="20px"
                        height="20px"
                      />
                    </span>
                  )}
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
