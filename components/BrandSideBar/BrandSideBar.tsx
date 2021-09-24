import React, { FC } from "react";
import styles from "./BrandSideBar.module.scss";
import Image from "next/image";

type Props = {
  carCompanies:any;
  headings?:boolean;
}

const BrandSideBar: FC<Props> = ({ carCompanies, headings }) => {
  return (
    <div className={styles.carSideSection}>
      <div className={styles.carCompaniesMain}>
        {headings && (
          <div className={styles.carCompaniesHeading}>
            <h3>Brand &nbsp; </h3> <p> | </p>
            <h3> &nbsp;Shop </h3>
          </div>
        )}
        {carCompanies?.map((item, index) => {
          return (
            <div className={styles.carCompaniesMap}>
              {item?.image && (
                <div style={{ padding: "10px" }}>
                  <Image src={item?.image} />
                </div>
              )}
              <p>{item?.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandSideBar;