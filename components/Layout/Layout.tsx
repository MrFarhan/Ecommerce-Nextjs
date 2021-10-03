import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.scss"
import NavbarMobile from "./NavBar/NavMobile/NavbarMobile";

const Layout = ({ children}) => {
  return (
    <div >
      <Header />
      <div className={styles.container}>{children}</div>
      <NavbarMobile/>
      <Footer/>
    </div>
  );
};

export default Layout;
