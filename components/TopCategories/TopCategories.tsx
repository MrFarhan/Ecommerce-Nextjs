import CategoryCard from "../Card/CategoryCard";
import { TopCategoryData } from "./TopCategories.helper";
import styles from "./TopCategories.module.scss";
import { BsGridFill } from "react-icons/bs";
import { AiOutlineCaretRight } from "react-icons/ai";


const TopCategories = () => {
  return (
    <div className={styles.homeCardMain}>
      <div className={styles.homeCardMainHeading}>
        <h2>
          <BsGridFill color="rgb(210, 63, 87)"/> &nbsp; Top Categories
        </h2>
        <p>View all <AiOutlineCaretRight/></p>
      </div>
      <div className={styles.homeCard}>
        {TopCategoryData?.map((item, index) => {
          return (
            <CategoryCard
              image={item.image}
              blueBadgeContent={item?.blueBadgeContent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopCategories;
