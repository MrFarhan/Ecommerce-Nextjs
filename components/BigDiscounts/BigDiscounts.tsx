import React from "react";
import styles from "./BigDiscounts.module.scss";
import { CgGift } from "react-icons/cg";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BigDiscountsData } from "./BigDiscounts.helper";
import TopRatingCard from "../Card/TopRatingCard";

const BigDiscounts = () => {
  return (
    <div className={styles.BigDiscountsMain}>
      <div className={styles.BigDiscountsHeading}>
        <h2>
          <CgGift className="lightRedColor" /> &nbsp;Big Discounts
        </h2>
        <p className="viewAllClass">
          View all <AiOutlineCaretRight />
        </p>
      </div>
      <div className={styles.BigDiscountsCard}>
        {BigDiscountsData?.map((item, index) => {
          return (
            <TopRatingCard
              image={item.image}
              paragraph={item?.paragraph}
              price={item?.price}
              strikePrice={item?.strikePrice}
              key={index}
              propClass={styles.BigDiscountCardReturn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BigDiscounts;
