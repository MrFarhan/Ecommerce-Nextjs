import Image from "next/image";
import React, { useState } from "react";
import Badge from "../Badge/Badge";
import EyeHeartGroup from "../EyeHeartGroup/EyeHeartGroup";
import styles from "./Card.module.scss";
import StarRating from "../StarRating/StarRating";

const Card = ({ image, paragraph, oldPrice, newPrice, itemRating }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardMainBadge}>
        <Badge content="25% off" />
        <EyeHeartGroup />
      </div>
      <div className={styles.cardMainImage}>
        <Image
          src={image}
          className={styles.projectImage}
          height="200"
          width="200"
        />
      </div>
      <div className={styles.cardFooter}>
        <p>{paragraph}</p>
        <StarRating itemRating={itemRating} />
        <p className={styles.priceGroup}>
          <span>
            {oldPrice} <s>{newPrice}</s>
          </span>
          <span className={styles.AddSubButtonGroup}>
            {counter > 0 && (
              <span className={styles.decrementGroup}>
                <button onClick={() => setCounter(counter - 1)}>&#8211;</button>
                {counter}
              </span>
            )}
            <button onClick={() => setCounter(counter + 1)}>+</button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
