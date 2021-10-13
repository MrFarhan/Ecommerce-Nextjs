import React from "react";
import styles from "./MobileSection.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import { MobileData, Brand, Shop } from "./MobileSection.helper";
import Card from "../Card/Card";
import BrandSideBar from "../BrandSideBar/BrandSideBar";

const MobileSection = () => {
  return (
    <div className={styles.carSectionMain}>
      <BrandSideBar Brand={Brand} Shop={Shop} headings />
      <div className={styles.carMain}>
        <div className={styles.carMainHeading}>
          <h2>Mobile Phones</h2>
          <p>
            View all <AiOutlineCaretRight />
          </p>
        </div>
        <div className={styles.carInner}>
          <div className={styles.carCard}>
            {MobileData?.map((item, index) => {
              return (
                <span key={index}>
                  <Card
                    image={item.image}
                    paragraph={item?.paragraph}
                    oldPrice={item?.strikePrice}
                    newPrice={item?.price}
                    itemRating={item?.itemRating}
                    badges
                    keyI={"mobile-"+index}
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
