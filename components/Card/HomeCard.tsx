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
        {HomeCardData?.map((item, index) => {
          return (
            <span key={index}>
              <Card
                image={item.image}
                paragraph={item?.paragraph}
                oldPrice={item?.oldPrice}
                newPrice={item?.newPrice}
                itemRating={item?.itemRating}
                badges
                keyI={index}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCard;
