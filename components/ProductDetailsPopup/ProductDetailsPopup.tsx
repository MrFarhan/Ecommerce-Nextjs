import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import StarRating from "../StarRating/StarRating";
import styles from "./ProductDetailsPopup.module.scss";

const ProductDetailsPopup = ({ data }) => {
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
          <CustomButton text="Add To Cart" />
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
