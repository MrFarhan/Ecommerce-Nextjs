import Image from "next/image";
import React, { FC } from "react";
import styles from "./TopRatingCard.module.scss";
import StarRating from "../StarRating/StarRating";
import cx from "classnames";

type Props = {
  image?: any;
  paragraph: string;
  price?: string;
  itemRating?: number;
  strikePrice?: string;
  icon?: any;
  description?: string;
  propClass?: string;
  key?: number;
};

const TopRatingCard: FC<Props> = ({
  image,
  paragraph,
  itemRating,
  price,
  strikePrice,
  icon,
  description,
  propClass,
  key,
}) => {
  return (
    <div className={cx(styles.TopRatingCardMain, propClass)} key={key}>
      {image && (
        <div className={styles.TopRatingImg}>
          <Image src={image} alt="top rating cards" />
        </div>
      )}
      {icon && icon}
      <div className={styles.TopRatingTextGroup}>
        {itemRating && <StarRating itemRating={itemRating} />}
        <p>{paragraph}</p>
        {description && <p className={styles.paragraphColor}> {description}</p>}
        <p>
          <span className="lightRedColor">
            {price}{" "}
            {strikePrice && (
              <span className={styles.paragraphColor}>
                <s>{strikePrice}</s>
              </span>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopRatingCard;
