import React, { useState } from "react";
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

const HeaderBottom = () => {
  const state = useSelector<initialStateType, initialStateType>(
    (state) => state
  );
  const reduxCounter = state?.counter;
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const propSetShowCart = () => {
    return setShowCart((prev) => !prev);
  };
  return (
    <div className={styles.headerCenter}>
      <div className={styles.headerCenterLogo}>
        <Image src={logo} alt="Logo of website " />
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
            <Badge content={reduxCounter} width="20px" height="20px" />
          </span>
          {showCart && <Cart propSetShowCart={propSetShowCart} />}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
