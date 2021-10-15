import React, { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import DecreamentBtn from "../ButtonGroup/DecrementBtn";
import IncreamentBtn from "../ButtonGroup/IncreamentBtn";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Cart.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { DecreamentFunc } from "../../hooks/DecreamentCartItem";
import { IncreamentFunc } from "../../hooks/IncreamentCartItem";

import shopingBag from "../../static/images/shoppingBag.svg";
import { itemAction } from "../../redux/actions";

const Cart = ({ propSetShowCart }) => {
  const state = useSelector((state): any => state);
  const cartItem = state?.item;
  const reduxItems = [...state?.item];
  const dispatch = useDispatch();
  var totalPrice = 0;

  const totalAmount = () => {
    cartItem?.map((item, index) => {
      console.log("hel", Number(item?.value?.newPrice));
      totalPrice += Number(item?.value?.newPrice * item?.quantity);
    });
  };
  totalAmount();
  console.log("total Price", totalPrice);
  console.log("cartItem", cartItem);

  const RemoveItem = (item) => {
    const currentItemIndex = reduxItems?.findIndex(
      (item1) => item1?.keyI === item?.keyI
    );
    reduxItems.splice(currentItemIndex, 1);
    dispatch(itemAction(reduxItems));
  };
  return (
    <div className={styles.cartMain}>
      <div className={styles.cartCover} onClick={() => propSetShowCart()}>
        {" "}
        Side cart here{" "}
      </div>
      <div className={styles.cartDrawer}>
        <div className={styles.cartTop}>
          <span>
            <AiOutlineShopping size="20px" />
          </span>
          <span>{cartItem?.length} Items</span>
          <hr />
        </div>

        <div className={styles.cartCenter}>
          {cartItem?.length ? (
            cartItem?.map((item, index) => {
              return (
                <div className={styles.cartReturn} key={index}>
                  <div className={styles.cartReturnBtn}>
                    <span
                      onClick={() => DecreamentFunc(reduxItems, item, dispatch)}
                    >
                      <DecreamentBtn />
                    </span>

                    {item?.quantity}
                    <span
                      onClick={() => IncreamentFunc(reduxItems, item, dispatch)}
                    >
                      <IncreamentBtn />
                    </span>
                  </div>
                  <div className={styles.cartReturnImg}>
                    <Image
                      src={item?.value?.image}
                      height="80px"
                      width="80px"
                      alt={"item?.value?.heading"}
                    />
                  </div>
                  <div className={styles.cartReturnMain}>
                    <h3 className={styles.heading}>{item?.value?.paragraph}</h3>
                    <p className={styles.quantityGroupSmall}>
                      ${item?.value?.newPrice}X{item?.quantity}
                    </p>
                    <p className={styles.price}>
                      ${item?.value?.newPrice * item?.quantity}
                    </p>
                  </div>
                  <div
                    className={styles.cartReturnCross}
                    onClick={() => RemoveItem(item)}
                  >
                    X
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.shopingCartText}>
              <Image src={shopingBag} alt="shoping card bag" />
              <h3>Your shopping bag is empty.</h3>
              <h3> Start shopping</h3>
            </div>
          )}
        </div>

        {cartItem?.length ? (
          <div className={styles.cartBottom}>
            <CustomButton
              text={`Checkout Now ${
                totalPrice > 0 ? `(${totalPrice}.00)` : ""
              }`}
              link={"/"}
              width="250px"
            />
            <CustomButton
              text="View Cart"
              link={"/"}
              width="250px"
              background="transparent"
              color="#d23f57"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
