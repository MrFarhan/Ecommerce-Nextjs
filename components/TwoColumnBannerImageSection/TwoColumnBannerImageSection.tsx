import React from "react";
import styles from "./TwoColumnBannerImageSection.module.scss";
import { AiOutlineCaretRight } from "react-icons/ai";
import {
  CarSectionData,
  carCompanies,
} from "./TwoColumnBannerImageSection.helper";
import Card from "../Card/Card";
import Image from "next/image";
import banner1 from "../../static/images/advertisment/banner-1.png";
import WiderBanner from "../../static/images/advertisment/banner-2.png";

const TwoColumnBannerImageSection = () => {
  return (
    <div className={styles.twoColumnBannerImageMain}>
      <Image src={banner1} />
      <Image src={WiderBanner} />
    </div>
  );
};

export default TwoColumnBannerImageSection;
