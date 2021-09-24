import Image from "next/image";
import React from "react";
import Badge from "../Badge/Badge";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ image, blueBadgeContent }) => {
  return (
    <div className={styles.categoryCardMain}>
      <div className={styles.CategoryCardImage}>
        <div className={styles.categoryBadgeGroup}>
          <Badge
            content={blueBadgeContent}
            bgColor="rgb(15, 52, 96)"
            width="80px"
          />
          <Badge
            content="3K order this week"
            width="125px"
            bgColor="rgba(0, 0, 0, 0.08)"
            color="rgb(43, 52, 69)"
          />
        </div>
        <div className={styles.categoryMainImage}>
          <Image src={image}/>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
