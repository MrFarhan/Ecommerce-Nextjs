import React from "react";
import styles from "./Categories.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import { CategoriesData } from "./Categories.helper";
import { BsGridFill } from "react-icons/bs";
import Image from "next/image";

const Categories = () => {
  return (
    <div className={styles.categoriesMainContainer}>
      <div className={styles.categoriesMain}>
        <div className={styles.categoriesHeading}>
          <h2>
            <BsGridFill color="rgb(210, 63, 87)" /> &nbsp; Categories
          </h2>
          <p>
            View all <AiOutlineCaretRight />
          </p>
        </div>
        <div className={styles.categoriesCard}> 
            {CategoriesData?.map((item, index) => {
              return (
                <div className={styles.categoriesCardMap} key={index}>
                  <Image src={item?.image} height="52" width="52" alt="main categories"/>
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
