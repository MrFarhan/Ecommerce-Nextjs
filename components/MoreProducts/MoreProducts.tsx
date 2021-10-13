import { MoreProductsData } from "./MoreProducts.helper";
import styles from "./MoreProducts.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import Card from "../Card/Card";

const MoreProducts = () => {
  return (
    <div className={styles.MoreProductsMain}>
      <div className={styles.MoreProductsHeading}>
        <h2>More for you</h2>
        <p>
          View all <AiOutlineCaretRight />
        </p>
      </div>
      <div className={styles.MoreProductsCard}>
        {MoreProductsData?.map((item, index) => {
          return (
            <span key={index}>
              <Card
                image={item.image}
                paragraph={item?.paragraph}
                oldPrice={item?.oldPrice}
                newPrice={item?.newPrice}
                itemRating={item?.itemRating}
                badges
                keyI={"more-"+index}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MoreProducts;
