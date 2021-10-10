import React from "react";
import styles from "./AboutBanner.module.scss";
import { AboutBannerData } from "./AboutBanner.helper";
import TopRatingCard from "../Card/TopRatingCard";

const AboutBanner = () => {
  return (
    <div className={styles.BigDiscountsMain}>
      <div className={styles.BigDiscountsCard}>
        {AboutBannerData?.map((item, index) => {
          return (
            <span key={index}>
              <TopRatingCard
                icon={item?.icon}
                paragraph={item?.heading}
                description={item?.description}
                propClass={styles.aboutBannerCard}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AboutBanner;
