import React, { FC, useState } from "react";
import styles from "./BrandSideBar.module.scss";
import Image from "next/image";

type Props = {
  carCompanies?: any;
  Brand?: any;
  Shop?: any;
  headings?: boolean;
};

const BrandSideBar: FC<Props> = ({ carCompanies, Brand, Shop, headings }) => {
  const [showShop, setShowShop] = useState(false);
  const dataLength = carCompanies
    ? carCompanies?.length
    : showShop
    ? Shop?.length
    : Brand?.length;
  return (
    <div className={styles.carSideSection}>
      <div
        className={styles.carCompaniesMain}
        style={{ height: `calc((50px * ${dataLength}) + 200px` }}
      >
        {headings && (
          <div className={styles.carCompaniesHeading}>
            <h3
              onClick={() => setShowShop(false)}
              style={{ color: !showShop ? "black" : "" }}
            >
              Brand &nbsp;{" "}
            </h3>{" "}
            <p> | </p>
            <h3
              onClick={() => setShowShop(true)}
              style={{ color: showShop ? "black" : "" }}
            >
              {" "}
              &nbsp;Shop{" "}
            </h3>
          </div>
        )}
        {(carCompanies ? carCompanies : showShop ? Shop : Brand)?.map(
          (item, index) => {
            return (
              <div className={styles.carCompaniesMap} key={index}>
                {item?.image && (
                  <div style={{ padding: "10px" }}>
                    <Image
                      src={item?.image}
                      height="20"
                      width="20"
                      alt="car companies names"
                    />
                  </div>
                )}
                <p>{item?.paragraph}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default BrandSideBar;
