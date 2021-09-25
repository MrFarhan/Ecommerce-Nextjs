import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import HomeCard from "../components/Card/HomeCard";
import TopCategories from "../components/TopCategories/TopCategories";
import TopRatingFeatured from "../components/TopRatingFeatured/TopRatingFeatured";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import BigDiscounts from "../components/BigDiscounts/BigDiscounts";
import CarSection from "../components/CarSection/CarSection";
import MobileSection from "../components/MobileSection/MobileSection";
import Optics from "../components/Optics/Optics";
import TwoColumnBannerImageSection from "../components/TwoColumnBannerImageSection/TwoColumnBannerImageSection";

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
          <HomeCarousel/>
          <br />
          <HomeCard/>
          <br />

          <TopCategories/>
          <TopRatingFeatured/>
          <NewArrivals/>
          <BigDiscounts/>
          <CarSection/>
          <MobileSection/>
          <TwoColumnBannerImageSection/>
          <Optics/>
          HEllo world
        </main>
      </Layout>
    </div>
  );
}
