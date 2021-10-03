import styles from "./HeaderTop.module.scss";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import Image from "next/image"
import logo from "../../../../static/images/logo.svg";

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTopMain}>
        <div className={styles.headerTopIconGroup}>
          <div className={styles.leftGroupItem}>
            <span>
              <IoCallOutline size="20px" />
            </span>{" "}
            <p>+88012 3456 7894</p>
          </div>
          <div className={styles.leftGroupItem2}>
            <span>
              <BsEnvelope size="20px" />
            </span>
            <p>support@ui-lib.com</p>
          </div>
        </div>
        <div className={styles.headerLogo}>
          <Image src={logo} alt="website logo"/>
        </div>

        <div className={styles.headerTopIconGroupRight}>
          <span>EN</span>
          <p>USD</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
