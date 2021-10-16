import React from "react";
import styles from "./NewReview.module.scss"
import CustomButton from "../CustomButton/CustomButton";
import StarRating from "../StarRating/StarRating";

const NewReview = () => {
  return (
    <div className={styles.newReviewContainer}>
      <h3>Write a Review for this product</h3>
      <div>
        <p>Your Rating</p>
        <StarRating itemRating={0}/>
      </div>
      <div>
        <p>Your Review</p>
        <textarea className={styles.textArea} />
        <CustomButton text="Submit"/>
      </div>

    </div>
  );
};

export default NewReview;
