import React from "react";
import styles from "./Optics.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import { CarSectionData, carCompanies } from "./Optics.helper";
import Card from "../Card/Card";
import BrandSideBar from "../BrandSideBar/BrandSideBar";

const Optics = () => {
  return (
    <div className={styles.carSectionMain}>
      <BrandSideBar carCompanies={carCompanies} headings />
      <div className={styles.carMain}>
        <div className={styles.carMainHeading}>
          <h2>Optics / Watch</h2>
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

export default Optics;
