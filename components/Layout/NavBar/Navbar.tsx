import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const NavData = [
    { name: "Home", route: "/" },
    { name: "Pages", route: "/" },
    { name: "User Account", route: "/" },
    { name: "Vender Account", route: "/" },
  ];
  return (
    <div className={styles.navbarMain}>
      <nav>
        <ul>
          <span className={styles.navHome}>
            Home
            <ul>
              <li>hello1</li>
              <li>hello2</li>
              <li>hello3</li>
              <li>hello4</li>
              <li>hello5</li>
            </ul>
          </span>
          <span className={styles.navPages}> 
            Pages{" "}
            <ul>
              <li>hello1</li>
              <li>hello2</li>
              <li>hello3</li>
              <li>hello4</li>
              <li>hello5</li>
            </ul>
          </span>
          <span className={styles.navUserAccount}> 
            User Account{" "}
            <ul>
              <li>hello1</li>
              <li>hello2</li>
              <li>hello3</li>
              <li>hello4</li>
              <li>hello5</li>
            </ul>
          </span>
          <span>
            Vendor{" "}
            <ul>
              <li>hello1</li>
              <li>hello2</li>
              <li>hello3</li>
              <li>hello4</li>
              <li>hello5</li>
            </ul>
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
