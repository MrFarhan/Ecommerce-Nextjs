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
import { CgBolt, CgGift } from "react-icons/cg";
import { BigDiscountsData } from "../components/BigDiscounts/BigDiscounts.helper";
import { CategoriesData } from "../components/Categories/Categories.helper";
import { HomeCardData } from "../components/Card/HomeCard.helper";

import { BsGridFill } from "react-icons/bs";

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>E-Commerce | Home</title>
          <meta
            name="description"
            content="One stop Ecommerce Solution for your all needs"
          />
          <link rel="icon" href="/logo.svg/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/s/materialicons/v103/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"
          />
        </Head>

        <main className={styles.main}>
          <HomeCarousel />
          <br />
          <HomeCard
            data={{
              heading: "Flash Sale",
              icon:<CgBolt color="rgb(210, 63, 87)" />,
              HomeCardData,
              frequentlyBought: true,
            }}
          />
          <br />
          <TopCategories />
          <TopRatingFeatured />
          <NewArrivals />
          <BigDiscounts
            data={{
              heading: "Big Discount",
              icon: <CgGift className="lightRedColor" />,
              dataObj: BigDiscountsData,
              viewAll: true,
            }}
          />
          <CarSection />
          <MobileSection />
          <TwoColumnBannerImageSection />
          <Optics />
          <Categories
            data={{
              heading: "Categories",
              icon: <BsGridFill color="rgb(210, 63, 87)" />,
              CategoriesData,
              viewAllBtn: true,
            }}
          />
          <MoreProducts />
          <AboutBanner />
        </main>
      </Layout>
    </Provider>
  );
}
