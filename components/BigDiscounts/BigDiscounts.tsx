import React from "react";
import styles from "./BigDiscounts.module.scss";
import { CgGift } from "react-icons/cg";
import { AiOutlineCaretRight } from "react-icons/ai";
import TopRatingCard from "../Card/TopRatingCard";
import CustomButton from "../CustomButton/CustomButton";

interface Props {
  data: any;
}

const BigDiscounts = ({ data }: Props) => {
  let strikeTotal = 0;
  let discountTotal = 0;
  return (
    <div className={styles.BigDiscountsMain}>
      <div className={styles.BigDiscountsHeading}>
        <h2>
          {data?.icon} &nbsp;{data?.heading}
        </h2>
        {data?.viewAll && (
          <p className="viewAllClass">
            View all <AiOutlineCaretRight />
          </p>
        )}
      </div>
      <div
        className={
          data?.frequentlyBought
            ? styles.BigDiscountsCardFrBought
            : styles.BigDiscountsCard
        }
      >
        {data?.frequentlyBought
          ? data?.dataObj?.map((item, index) => {
              strikeTotal += Number(item?.strikePrice);
              discountTotal += Number(item?.newPrice);
              return (
                <div className={styles.frequentlyBoughtContainer} key={index}>
                  <div key={index}>
                    <TopRatingCard
                      image={item.image}
                      paragraph={item?.paragraph}
                      price={item?.newPrice}
                      strikePrice={item?.strikePrice}
                      propClass={styles.BigDiscountCardReturn}
                    />
                  </div>
                  <div className={styles.addIconDiv}>
                    {index === 3 ? "=" : "+"}
                  </div>
                </div>
              );
            })
          : data?.dataObj?.map((item, index) => {
              return (
                <span key={index}>
                  <TopRatingCard
                    image={item.image}
                    paragraph={item?.paragraph}
                    price={item?.newPrice}
                    strikePrice={item?.strikePrice}
                    propClass={styles.BigDiscountCardReturn}
                  />
                </span>
              );
            })}
        {data?.frequentlyBought && (
          <div className={styles.saveDiv}>
            <h3 className={styles.strikeTotal}>${strikeTotal}</h3>
            <p className={styles.discountTotal}>Save ${discountTotal}</p>
            <div className={styles.saveBtnGroup}>
              <span>
                <CustomButton text="Add to cart" />
              </span>
              <span className={styles.addToListBtn}>
                <CustomButton text="Add to list" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigDiscounts;
