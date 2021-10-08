import Carousel, { CarouselItem } from "./Carousel";
import { carouselItem } from "./Carousel.helper";
import styles from "./HomeCarousel.module.scss";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
const HomeCarousel = () => {
  return (
    <div>
      {carouselItem?.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.carouselWrapper}>
              <div className={styles.carouselItemMain}>
                <div className={styles.carouselItemright}>
                  <h1>{item?.heading}</h1>
                  <p>{item?.paragraph}</p>
                  <CustomButton text="Shop Now" link={item?.buttonLink}  />
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
  );
};

export default HomeCarousel;
