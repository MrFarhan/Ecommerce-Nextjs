import styles from "./HeaderCenter.module.scss";
import Image from "next/image";
import logo from "../../../../static/images/logo.svg";
import InputGroup from "../../Input/InputGroup"
import { CgProfile } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";

const HeaderBottom = () => {
  return (
    <div className={styles.headerCenter}>
      <div className={styles.logo}><Image src={logo} alt="Logo of website " /></div>
      <div className={styles.inputGroup}><InputGroup /></div>
      <div className={styles.rightIconGroup}><CgProfile className={styles.dpShopingIcons}/>
      <AiOutlineShopping className={styles.dpShopingIcons}/>
    </div>
    </div>
  );
};

export default HeaderBottom;
