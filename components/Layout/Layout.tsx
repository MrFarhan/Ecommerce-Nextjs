import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./layout.module.scss"

const Layout = ({ children}) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
