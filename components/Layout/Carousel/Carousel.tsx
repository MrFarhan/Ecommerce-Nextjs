import React, { useState } from "react";
import styles from "./carousel.module.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={styles.Indicators}>
        {React.Children.map(children, (child, index) => {
          return (
            <input type="radio" key={index} onClick={() => updateIndex(index)}></input>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
