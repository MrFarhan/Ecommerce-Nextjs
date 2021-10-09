import React, { useState, useRef } from "react";
import { carouselItem } from "./Carousel.helper";
import styles from "./HomeCarousel.module.scss";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const carouselDataLength =
    typeof window !== "undefined" ? (window.innerWidth >= 576 ? 4 : 2) : 2;

  const onLeft = () => {
    setActiveIndex((prev) => (prev < 0 ? carouselDataLength - 1 : --prev));
  };

  const onRight = () => {
    setActiveIndex((prev) => (prev < carouselDataLength - 1 ? ++prev : 0));
  };
  return (
    <div className={styles.carouselMain}>
      <div className={styles.carouselDiv}>
        {carouselItem?.map((item, index) => {
          return (
            <div className={styles.carouselMap} key={index}>
              <div
                className={styles.carouselWrapper}
                style={{
                  transform: `translateX(-${
                    ref?.current?.clientWidth * activeIndex
                  }px)`,
                  height: "100%",
                  overflow: "hidden",
                  display: "flex",
                  width: "100vw",
                }}
                ref={ref}
              >
                <div className={styles.carouselItemMain}>
                  <div className={styles.carouselItemright}>
                    <h1>{item?.heading}</h1>
                    <p>{item?.paragraph}</p>
                    <CustomButton text="Shop Now" link={item?.buttonLink} />
                  </div>
                  <div>
                    <Image
                      src={item?.image?.shoeImg?.src}
                      alt="Picture of the shoe"
                      height="300"
                      width="300"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.controlBtn}>
        <span onClick={onLeft}>&#8592;</span>
        <span onClick={onRight}>&#8594;</span>
      </div>
    </div>
  );
};

export default HomeCarousel;
