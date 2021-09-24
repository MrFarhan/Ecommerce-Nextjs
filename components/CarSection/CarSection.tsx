import React from "react";
import styles from "./CarSection.module.scss";
import { CgGift } from "react-icons/cg";
import { AiOutlineCaretRight } from "react-icons/ai";
import { CarSectionData, carCompanies } from "./CarSection.helper";
import Card from "../Card/Card";
import { CgBolt } from "react-icons/cg";
import TopRatingCard from "../Card/TopRatingCard";
import Image from "next/image";

const CarSection = () => {
  return (
    <div className={styles.carSectionMain}>
      <div className={styles.carSideSection}>
        <div className={styles.carCompaniesMain}>
          {carCompanies?.map((item, index) => {
            return (
              <div className={styles.carCompaniesMap}>
                {item?.image && (
                  <div style={{ padding: "10px" }}>
                    <Image src={item?.image} />
                  </div>
                )}
                <p>{item?.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.carMain}>
        <div className={styles.carMainHeading}>
          <h2>Cars</h2>
          <p>
            View all <AiOutlineCaretRight />
          </p>
        </div>
        <div className={styles.carInner}>
          <div className={styles.carCard}>
            {CarSectionData?.map((item, index) => {
              return (
                <Card
                  image={item.image}
                  paragraph={item?.paragraph}
                  oldPrice={item?.strikePrice}
                  newPrice={item?.price}
                  itemRating={item?.itemRating}
                  badges
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSection;
