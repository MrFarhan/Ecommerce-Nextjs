import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import HomeCard from "../components/Card/HomeCard";
import MoreProducts from "../components/MoreProducts/MoreProducts";
import TopCategories from "../components/TopCategories/TopCategories";
import TopRatingFeatured from "../components/TopRatingFeatured/TopRatingFeatured";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import BigDiscounts from "../components/BigDiscounts/BigDiscounts";
import CarSection from "../components/CarSection/CarSection";
import MobileSection from "../components/MobileSection/MobileSection";
import Optics from "../components/Optics/Optics";
import TwoColumnBannerImageSection from "../components/TwoColumnBannerImageSection/TwoColumnBannerImageSection";
import Categories from "../components/Categories/Categories";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>E-Commerce | Home</title>
          <meta name="description" content="One stop Ecommerce Solution for your all needs" />
          <link rel="icon" href="/logo.svg/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/s/materialicons/v103/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"
          />
        </Head>

        <main className={styles.main}>
          <HomeCarousel />
          <br />
          <HomeCard />
          <br />

          <TopCategories />
          <TopRatingFeatured />
          <NewArrivals />
          <BigDiscounts />
          <CarSection />
          <MobileSection />
          <TwoColumnBannerImageSection />
          <Optics />
          <Categories />
          <MoreProducts />
          <AboutBanner />
        </main>
      </Layout>
    </Provider>
  );
}
