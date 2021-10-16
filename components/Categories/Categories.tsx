import React from "react";
import styles from "./Categories.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";
import Image from "next/image";

const Categories = ({ data }) => {
  return (
    <div className={styles.categoriesMainContainer}>
      <div className={styles.categoriesMain}>
        <div className={styles.categoriesHeading}>
          <h2>
            {data?.icon} &nbsp; {data?.heading}
          </h2>
          {data?.viewAllBtn && (
            <p>
              View all <AiOutlineCaretRight />
            </p>
          )}
        </div>
        <div className={styles.categoriesCard}>
          {data?.CategoriesData?.map((item, index) => {
            return (
              <div className={data?.frequentlyBought ? styles.categoriesCardMapFrBought : styles.categoriesCardMap} key={index}>
                <Image
                  src={item?.image}
                  height="52"
                  width="52"
                  alt="main categories"
                />
                <h5>{item?.paragraph}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
