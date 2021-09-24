import Image from "next/image";
import React, { FC } from "react";
import styles from "./TopRatingCard.module.scss";
import StarRating from "../StarRating/StarRating";

type Props = {
  image: any;
  paragraph: string;
  price?: string;
  itemRating?: number;
  strikePrice?:string;
};

const TopRatingCard: FC<Props> = ({
  image,
  paragraph,
  itemRating,
  price,
  strikePrice,
}) => {
  return (
    <div style={{ background: "white", borderRadius: "20px", padding: "1em" }}>
      <div>
        <Image src={image} />
      </div>
      <div>
        <p>{paragraph}</p>
        {itemRating && <StarRating itemRating={itemRating} />}
        <p>
          <span style={{ color: "#D23F57" }}>
            {price}{" "}
            {strikePrice && (
              <span style={{ color: "gray" }}>
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
