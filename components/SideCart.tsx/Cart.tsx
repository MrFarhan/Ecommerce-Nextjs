import React, { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import DecreamentBtn from "../ButtonGroup/DecrementBtn";
import IncreamentBtn from "../ButtonGroup/IncreamentBtn";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./Cart.module.scss";
import Image from "next/image";
import car1 from "../../static/images/cars/1.png";
import car2 from "../../static/images/cars/1.png";
import car3 from "../../static/images/cars/1.png";
import { useSelector } from "react-redux";

const Cart = ({ propSetShowCart }) => {
  const state = useSelector((state):any => state);
  const cartItem = state?.item;
  const tempCartData = [
    { image: car1, heading: "Ford 2019", quantity: 1, price: 250 },
    { image: car2, heading: "Ford 2019", quantity: 2, price: 250 },
    { image: car3, heading: "Ford 2019", quantity: 5, price: 250 },
  ];

  console.log("cartItem", cartItem);

  // const [filteredItem, setFilteredItem] = useState([]);
  // useEffect(() => {

  //   let temp = cartItem
  //     ?.filter(
  //       (item, index, arr) =>
  //         arr?.findIndex((item1) => item1?.keyI === item?.keyI) === index
  //     )
  //     ?.map((item) => ({
  //       ...item,
  //       quantity: cartItem?.filter((item1) => item1?.keyI === item?.keyI)
  //         ?.length,
  //     }));
  //   console.log(temp, "abc", cartItem);
  //   setFilteredItem(temp)
  // }, [cartItem]);

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
          {cartItem &&
            cartItem?.map((item, index) => {
              return (
                <div className={styles.cartReturn} key={index}>
                  <div className={styles.cartReturnBtn}>
                    <DecreamentBtn />
                    {item?.quantity}
                    <IncreamentBtn />
                  </div>
                  <div className={styles.cartReturnImg}>
                    <Image
                      src={item?.value?.image}
                      height="80px"
                      width="80px"
                      alt={item?.value?.heading}
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
                  <div className={styles.cartReturnCross}>X</div>
                </div>
              );
            })}
          {/* {tempCartData?.map((item, index) => {
            return (
              <div className={styles.cartReturn} key={index}>
                <div className={styles.cartReturnBtn}>
                  <DecreamentBtn />
                  {item?.quantity}
                  <IncreamentBtn />
                </div>
                <div className={styles.cartReturnImg}>
                  <Image
                    src={item.image}
                    height="80px"
                    width="80px"
                    alt={item?.heading}
                  />
                </div>
                <div className={styles.cartReturnMain}>
                  <h3 className={styles.heading}>{item?.heading}</h3>
                  <p className={styles.quantityGroupSmall}>
                    ${item?.price}X{item?.quantity}
                  </p>
                  <p className={styles.price}>${item?.price}</p>
                </div>
                <div className={styles.cartReturnCross}>X</div>
              </div>
            );
          })} */}
        </div>

        <div className={styles.cartBottom}>
          <CustomButton text="Check out Now" link={"/"} width="250px" />
          <CustomButton
            text="View Cart"
            link={"/"}
            width="250px"
            background="transparent"
            color="#d23f57"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
