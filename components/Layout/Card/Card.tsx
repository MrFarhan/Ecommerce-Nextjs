import Image from "next/image";
import React from "react";
import Badge from "../Badge/Badge";
import EyeHeartGroup from "../EyeHeartGroup/EyeHeartGroup";
import styles from "./Card.module.scss";
import StarRating from "../StarRating/StarRating";

const Card = ({ image, paragraph, oldPrice, newPrice, itemRating }) => {
  console.log("mobPic", image);
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardMainBadge}>
        <Badge content="25% off" />
        <EyeHeartGroup />
      </div>
      <Image
        src={image}
        className={styles.projectImage}
        height="300"
        width="300"
      />
      <p>{paragraph}</p>
      <StarRating itemRating={itemRating} />
      <p className={styles.priceGroup}>
        {oldPrice} <s>{newPrice}</s>{" "}
      </p>
    </div>
  );
};

export default Card;
