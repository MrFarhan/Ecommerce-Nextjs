import React from "react";
import styles from "./TopRatingFeatured.module.scss";
import { GiStarGate } from "react-icons/gi";
import { GiJusticeStar } from "react-icons/gi";
import { AiOutlineCaretRight } from "react-icons/ai";
import { TopRating, Featured } from "./TopRatingFeatured.helper";
import TopRatingCard from "../Card/TopRatingCard";

const TopRatingFeatured = () => {
  return (
    <div className={styles.TopRatingFeaturedMain}>
      <div className={styles.TopRatingMain}>
        <div className={styles.TopRatingMainHeading}>
          <h2>
            <GiStarGate color="rgb(250, 180, 0)" /> &nbsp;Top Ratings
          </h2>
          <p>
            View all <AiOutlineCaretRight />
          </p>
        </div>
        <div className={styles.topRatingCard}>
          {TopRating?.map((item, index) => {
            return (
              <TopRatingCard
                image={item.image}
                paragraph={item?.paragraph}
                price={item?.price}
                itemRating={item?.itemRating}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.FeaturedMain}>
        <div className={styles.TopRatingMainHeading}>
          <h2>
            <GiJusticeStar color="rgb(250, 180, 0)" /> &nbsp;Featured Boards
          </h2>
          <p>
            View all <AiOutlineCaretRight />
          </p>
        </div>
        <div className={styles.FeaturedCard} >
          {Featured?.map((item, index) => {
            return (
              <TopRatingCard
                image={item.image}
                paragraph={item?.paragraph}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopRatingFeatured;
