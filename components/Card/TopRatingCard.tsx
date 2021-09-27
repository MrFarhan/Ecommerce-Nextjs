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
        <div>
          <Image src={image} alt="top rating cards" />
        </div>
      )}
      {icon && icon}
      <div>
        <p>{paragraph}</p>
        {description && <p className={styles.paragraphColor}> {description}</p>}
        {itemRating && <StarRating itemRating={itemRating} />}
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
