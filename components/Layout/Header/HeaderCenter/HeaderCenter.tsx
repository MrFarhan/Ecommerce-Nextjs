import styles from "./HeaderCenter.module.scss";
import Image from "next/image";
import logo from "../../../../static/images/logo.svg";
import Input from "../../Input/Input";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";

const HeaderBottom = () => {
  return (
    <div className={styles.headerCenter}>
      <Image src={logo} alt="Logo of website " />
      <Input />
      <CgProfile className={styles.dpShopingIcons}/>
      <AiOutlineShopping className={styles.dpShopingIcons}/>
    </div>
  );
};

export default HeaderBottom;
