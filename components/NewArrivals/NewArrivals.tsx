import React from "react";
import styles from "./NewArrivals.module.scss";
import { TiStarburst } from "react-icons/ti";
import { AiOutlineCaretRight } from "react-icons/ai";
import { NewArrivalsData } from "./NewArrivals.helper";
import TopRatingCard from "../Card/TopRatingCard";

const NewArrivals = () => {
  return (
    <div className={styles.NewArrivalsMain}>
      <div className={styles.NewArrivalsHeading}>
        <h2>
          <TiStarburst color="rgb(250, 180, 0)" /> &nbsp;New Arrivals
        </h2>
        <p>
          View all <AiOutlineCaretRight />
        </p>
      </div>
      <div className={styles.NewArrivalsCard}>
        {NewArrivalsData?.map((item, index) => {
          return (
            <TopRatingCard
              image={item.image}
              paragraph={item?.paragraph}
              price={item?.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
