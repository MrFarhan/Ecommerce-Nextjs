import Card from "./Card";
import styles from "./HomeCard.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";

const HomeCard = ({ data }) => {
  return (
    <div className={styles.homeCardMain}>
      <div className={styles.homeCardMainHeading}>
        <h2>
          {data?.icon} &nbsp; {data?.heading}
        </h2>
        <p className="viewAllClass">
          View all <AiOutlineCaretRight />
        </p>
      </div>
      <div className={styles.homeCard}>
        {data?.HomeCardData?.map((item, index) => {
          return (
            <span key={index}>
              <Card
                image={item?.value?.image}
                paragraph={item?.value?.paragraph}
                oldPrice={item?.value?.oldPrice}
                newPrice={item?.value?.newPrice}
                itemRating={item?.value?.itemRating}
                badges
                keyI={"accessories-" + item?.keyI}
                itemRatingCount={item?.value?.itemRatingCount}
                brand={item?.value?.brand}
                soldBy={item?.value?.soldBy}
                isStockAvailable={item?.value?.isStockAvailable}
                itemImageArray={item?.value?.itemImageArray}
                completeItem={item}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCard;
