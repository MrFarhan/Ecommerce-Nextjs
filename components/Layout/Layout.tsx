import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.scss"

const Layout = ({ children}) => {
  return (
    <>
      <Header />
      <span className={styles.container}>{children}</span>
      <Footer/>
    </>
  );
};

export default Layout;
