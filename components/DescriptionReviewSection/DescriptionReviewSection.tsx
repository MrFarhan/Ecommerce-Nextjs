import React, { useState } from "react";
import styles from "./DescriptionReviewSection.module.scss";
import profileReviewer1 from "../../static/images/profileReviewer1.png";
import profileReviewer2 from "../../static/images/profileReviewer2.png";
import profileReviewer3 from "../../static/images/profileReviewer3.png";
import Image from "next/image";
import StarRating from "../StarRating/StarRating";
import NewReview from "./NewReview";
import {
  dataObj,
  CategoriesData,
  HomeCardData,
} from "./DescriptionReviewSection.helper";
import BigDiscounts from "../BigDiscounts/BigDiscounts";
import Categories from "../Categories/Categories";
import HomeCard from "../Card/HomeCard";

const DescriptionReviewSection = () => {
  const [showReviews, setShowReviews] = useState(false);
  const reviewData = [
    {
      dp: profileReviewer1,
      name: "Jannie Schumm",
      rating: "4.7",
      time: "9 Months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
    },
    {
      dp: profileReviewer2,
      name: "Joe Kenan",
      rating: "4.7",
      time: "2.3 years ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
    },
    {
      dp: profileReviewer3,
      name: "Jenifer Tulio",
      rating: "4.7",
      time: "9 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
    },
  ];

  return (
    <div className={styles.descriptionReviewContainer}>
      <div className={styles.descriptionReviewHeading}>
        <span>
          <p
            onClick={() => setShowReviews(false)}
            className={!showReviews ? styles.descriptionHeadingP : ""}
          >
            Description
          </p>
          <p
            onClick={() => setShowReviews(true)}
            className={showReviews ? styles.descriptionHeadingP : ""}
          >
            Review
          </p>
        </span>
        <hr />
      </div>
      {!showReviews ? (
        <div className={styles.descriptionReview}>
          <h2>Specification:</h2>
          <p>
            Brand: Beats Model: S450
            <br />
            Wireless Bluetooth Headset
            <br />
            FM Frequency Response: 87.5 – 108 MHz
            <br />
            Feature: FM Radio, Card Supported (Micro SD / TF)
            <br />
            Made in China
          </p>
        </div>
      ) : (
        <div className={styles.reviewsGroupContainer}>
          {reviewData?.map((item, index) => {
            return (
              <div className={styles.reviewGropReturn} key={index}>
                <div className={styles.reviewImgGroup}>
                  <div>
                    <Image src={item?.dp} width="48px" height="48px" alt="Product Reviewer Profile"/>
                  </div>
                  <div>
                    <h5 className={styles.reviewerName}>{item?.name}</h5>
                    <p className={styles.starRating}>
                      <StarRating itemRating={Number(item?.rating)} />
                      {item?.rating} &nbsp; {item?.time}
                    </p>
                  </div>
                </div>

                <div>
                  <p>{item?.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <NewReview />
      <br />

      <BigDiscounts
        data={{
          heading: "Frequently Bought Together",
          dataObj,
          frequentlyBought: true,
        }}
      />
      <br />

      <Categories
        data={{
          heading: "Also Available at",
          CategoriesData,
          frequentlyBought: true,
        }}
      />
      <br />
      <br />
      <div className={styles.lastCardSec}>
        <HomeCard
          data={{
            heading: "Related Products",
            HomeCardData,
            frequentlyBought: true,
          }}
        />
      </div>
    </div>
  );
};

export default DescriptionReviewSection;
