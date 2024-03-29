import React from "react";
import styles from "./Optics.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import { opticsData, Brand } from "./Optics.helper";
import { Shop } from "../MobileSection/MobileSection.helper";

import Card from "../Card/Card";
import BrandSideBar from "../BrandSideBar/BrandSideBar";

const Optics = () => {
  return (
    <div className={styles.carSectionMain}>
      <BrandSideBar Brand={Brand} Shop={Shop} headings />
      <div className={styles.carMain}>
        <div className={styles.carMainHeading}>
          <h2>Optics / Watch</h2>
          <p>
            View all <AiOutlineCaretRight />
          </p>
        </div>
        <div className={styles.carInner}>
          <div className={styles.carCard}>
            {opticsData?.map((item, index) => {
              return (
                <span key={index}>
                  <Card
                    image={item?.value?.image}
                    paragraph={item?.value?.paragraph}
                    oldPrice={item?.value?.strikePrice}
                    newPrice={item?.value?.newPrice}
                    itemRating={item?.value?.itemRating}
                    badges
                    keyI={"optics-" + item?.keyI}
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

export default Optics;
