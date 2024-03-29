import React from "react";
import styles from "./CarSection.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import { CarSectionData, carCompanies } from "./CarSection.helper";
import Card from "../Card/Card";
import BrandSideBar from "../BrandSideBar/BrandSideBar";

const CarSection = () => {
  return (
    <div className={styles.carSectionMain}>
      <BrandSideBar carCompanies={carCompanies} />
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
                <span key={index}>
                  <Card
                    image={item?.value?.image}
                    paragraph={item?.value?.paragraph}
                    oldPrice={item?.value?.strikePrice}
                    newPrice={item?.value?.newPrice}
                    itemRating={item?.value?.itemRating}
                    badges
                    keyI={"car-" + item?.keyI}
                    completeItem={item}
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

export default CarSection;
