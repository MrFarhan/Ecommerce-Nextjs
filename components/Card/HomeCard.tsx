import Card from "./Card";
import { HomeCardData } from "./HomeCard.helper";
import styles from "./HomeCard.module.scss";
import { CgBolt } from "react-icons/cg";
import { AiOutlineCaretRight } from "react-icons/ai";

const HomeCard = () => {
  return (
    <div className={styles.homeCardMain}>
      <div className={styles.homeCardMainHeading}>
        <h2>
          <CgBolt color="rgb(210, 63, 87)" /> &nbsp; Flash Sale
        </h2>
        <p className="viewAllClass">
          View all <AiOutlineCaretRight />
        </p>
      </div>
      <div className={styles.homeCard}>
        {Object.values(HomeCardData)?.map((item, index) => {
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
