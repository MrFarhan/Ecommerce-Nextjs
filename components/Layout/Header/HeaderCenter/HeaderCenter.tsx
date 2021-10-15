import React, { useState, useEffect } from "react";
import styles from "./HeaderCenter.module.scss";
import Image from "next/image";
import logo from "../../../../static/images/logo.svg";
import InputGroup from "../../Input/InputGroup";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";
import Badge from "../../../Badge/Badge";
import { useSelector } from "react-redux";
import { initialStateType } from "../../../../redux/reducers";
import Cart from "../../../SideCart.tsx/Cart";
import Modal from "../../../Modal/Modal";
import ProfilePopup from "../../../ProfilePopup/ProfilePopup";
import BottomDropdown from "../../BottomDropdown/BottomDropdown";

const HeaderBottom = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  const state = useSelector<initialStateType, initialStateType>(
    (state) => state
  );
  const reduxItems = state?.item;
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const propSetShowCart = () => {
    return setShowCart((prev) => !prev);
  };
  return (
    <div
      className={
        scrolled
          ? styles.headerCenterContainerScroll
          : styles.headerCenterContainer
      }
    >
      <div className={styles.headerCenter}>
        <div className={styles.headerCenterLogo}>
          <span className={styles.headerLogo}>
            <Image src={logo} alt="Logo of website " />
          </span>
          {scrolled && <BottomDropdown background="white" />}
        </div>
        <div className={styles.inputGroup}>
          <InputGroup />
        </div>
        <div className={styles.rightIconGroup}>
          <div className={styles.rightIconItem}>
            <CgProfile
              className={styles.dpShopingIcons}
              onClick={() => setShowModal(true)}
            />
            {showModal && (
              <Modal
                onClose={() => setShowModal(false)}
                child={<ProfilePopup />}
              />
            )}
          </div>
          <div className={styles.rightIconItem}>
            <AiOutlineShopping
              className={styles.dpShopingIcons}
              onClick={() => propSetShowCart()}
            />
            <span className={styles.badgeCount}>
              <Badge
                content={reduxItems?.length}
                width="20px"
                height="20px"
              />
            </span>
            {showCart && <Cart propSetShowCart={propSetShowCart} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
