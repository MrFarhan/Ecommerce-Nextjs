import Carousel, { CarouselItem } from "./Carousel";
import { carouselItem } from "./Carousel.helper";
import styles from "./HomeCarousel.module.scss"
import Image from "next/image";
const HomeCarousel = () => {
  return (
    <div>
      {carouselItem?.map((item, index) => {
        return (
          <div>
            <div className={styles.carouselWrapper}>
            <div className={styles.carouselItemMain}>
              <div className={styles.carouselItemright}>
                <h1>{item?.heading}</h1>
                <p>{item?.paragraph}</p>
                <button>
                  {" "}
                  <a href={item?.buttonLink} target="_blank">
                    Shop Now
                  </a>
                </button>
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
