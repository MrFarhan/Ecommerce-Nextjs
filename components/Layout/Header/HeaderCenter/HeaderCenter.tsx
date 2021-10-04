import styles from "./HeaderCenter.module.scss";
import Image from "next/image";
import logo from "../../../../static/images/logo.svg";
import InputGroup from "../../Input/InputGroup";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";
import Badge from "../../../Badge/Badge";

const HeaderBottom = () => {
  return (
    <div className={styles.headerCenter}>
      <div className={styles.headerCenterLogo} >
        <Image src={logo} alt="Logo of website " />
      </div>
      <div className={styles.inputGroup}>
        <InputGroup />
      </div>
      <div className={styles.rightIconGroup}>
        <div className={styles.rightIconItem}>
          <CgProfile className={styles.dpShopingIcons} />
        </div>
        <div className={styles.rightIconItem}>
          <AiOutlineShopping className={styles.dpShopingIcons} />
          <span className={styles.badgeCount}><Badge content="3" width="20px" height="20px"/></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
