import Carousel, { CarouselItem } from "./Carousel";
import { carouselItem } from "./Carousel.helper";
import styles from "./HomeCarousel.module.scss"
import Image from "next/image";
const HomeCarousel = () => {
  return (
    <Carousel>
      {carouselItem?.map((item, index) => {
        return (
          <CarouselItem>
            <div className={styles.carouselItemMain}>
              <div>
                <h2>{item?.heading}</h2>
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
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
