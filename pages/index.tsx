import Head from "next/head";
import Carousel, { CarouselItem } from "../components/Layout/Carousel/Carousel";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";
import { carouselItem } from "../components/Layout/Carousel/Carousel.helper";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Commerce | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg/" />
      </Head>

      <Layout>
        <main className={styles.main}>
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
                      <Image src={item?.image?.shoeImg?.src} alt="Picture of the shoe" height="300" width="300"/>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </Carousel>
          <br />
          HEllo world
        </main>
      </Layout>
    </div>
  );
}
