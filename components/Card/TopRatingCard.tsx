import Image from "next/image";
import React, { FC } from "react";
import styles from "./TopRatingCard.module.scss";
import StarRating from "../StarRating/StarRating";

type Props = {
  image: any;
  paragraph: string;
  price?: string;
  itemRating?: number;
};

const TopRatingCard: FC<Props> = ({ image, paragraph, itemRating, price }) => {
  return (
    <div>
      <div>
        <Image src={image} />
      </div>
      <div>
        <p>{paragraph}</p>
        {itemRating && <StarRating itemRating={itemRating} />}
        <p>
          <span style={{color:"#D23F57"}}>{price}</span>
        </p>
      </div>
    </div>
  );
};

export default TopRatingCard;
