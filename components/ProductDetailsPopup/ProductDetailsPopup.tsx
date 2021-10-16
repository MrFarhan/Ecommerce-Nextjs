import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecreamentFunc } from "../../hooks/DecreamentCartItem";
import { IncreamentFunc } from "../../hooks/IncreamentCartItem";
import { initialStateType } from "../../redux/reducers";
import DecreamentBtn from "../ButtonGroup/DecrementBtn";
import IncreamentBtn from "../ButtonGroup/IncreamentBtn";
import CustomButton from "../CustomButton/CustomButton";
import StarRating from "../StarRating/StarRating";
import styles from "./ProductDetailsPopup.module.scss";

const ProductDetailsPopup = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector<initialStateType, initialStateType>(
    (state) => state
  );
  const reduxItems = [...state?.item];

  React.useEffect(() => {
    setCounter(
      state?.item?.reduce((prev, curr) => {
        if ((curr?.keyI == data?.completeItem?.keyI)|| (curr?.keyI == data?.keyI)) {
          return (prev += curr.quantity || 0);
        } else return prev;
      }, 0)
    );
  }, [state?.item]);
  return (
    <div className={styles.ProductDetailsContainer} key={data?.image}>
      <div className={styles.ProductDetailsContentContainer}>
        {data?.image && (
          <div className={styles.ProductImageContainer}>
            <Image
              src={data?.image}
              width="200px"
              height="200px"
              alt="product details"
            />
          </div>
        )}
        <div className={styles.ProductDetailsContent}>
          <h1 className={styles.ProductHeading}>{data?.paragraph}</h1>
          <p className={styles.ProductBrandName}>Brand: {data?.brand}</p>
          <span className={styles.ProductRating}>
            <StarRating itemRating={data?.itemRating} />({data?.itemRatingCount}
            )
          </span>
          <h2>${data?.newPrice}</h2>
          <p className={styles.ProductStockDetails}>
            {data?.isStockAvailable ? <p>Stock Available </p> : ""}
          </p>

          {counter > 0 ? (
            <span className={styles.AddSubButtonGroup}>
              <span className={styles.decrementGroup}>
                <span
                  onClick={() =>
                    DecreamentFunc(reduxItems, data?.completeItem, dispatch)
                  }
                >
                  <DecreamentBtn />
                </span>
                {counter}
              </span>
              <span
                onClick={() =>
                  IncreamentFunc(reduxItems, data?.completeItem, dispatch)
                }
              >
                <IncreamentBtn />
              </span>
            </span>
          ) : (
            <span
              onClick={() =>
                IncreamentFunc(reduxItems, data?.completeItem, dispatch)
              }
            >
              {" "}
              <CustomButton text="Add To Cart" />
            </span>
          )}
          <p>Sold By: {data?.soldBy}</p>
        </div>
      </div>
      <div className={styles.ProductImagePreviewContainer}>
        {data?.itemImageArray?.map((img, ind) => {
          return (
            <div className={styles.ProductImagePreview} key={ind}>
              <Image
                src={img}
                width="50px"
                height="50px"
                alt="product img preview"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetailsPopup;
