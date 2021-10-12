import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import StarRating from "../StarRating/StarRating";
import styles from "./ProductDetailsPopup.module.scss";

const ProductDetailsPopup = ({ data }) => {
  const {
    image,
    paragraph,
    newPrice,
    itemRating,
    itemRatingCount,
    brand,
    soldBy,
    isStockAvailable,
    imageArray,
  } = data;
  return (
    <div className={styles.ProductDetailsContainer}>
      <div className={styles.ProductDetailsContentContainer}>
        <div className={styles.ProductImageContainer}>
          <Image src={image} width="200px" height="200px" />
        </div>
        <div className={styles.ProductDetailsContent}>
          <h1 className={styles.ProductHeading}>{paragraph}</h1>
          <p className={styles.ProductBrandName}>Brand: {brand}</p>
          <span className={styles.ProductRating}>
            <StarRating itemRating={itemRating} />({itemRatingCount})
          </span>
          <h2>${newPrice}</h2>
          <p className={styles.ProductStockDetails}>
            {isStockAvailable ? <p>Stock Available </p> : ""}
          </p>
          <CustomButton text="Add To Cart" />
          <p>Sold By: {soldBy}</p>
        </div>
      </div>
      <div className={styles.ProductImagePreviewContainer}>
        {imageArray?.map((img, ind) => {
          return (
            <div className={styles.ProductImagePreview}>
              <Image src={img} width="50px" height="50px" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetailsPopup;
