import BottomDropdown from "../../BottomDropdown/BottomDropdown";
import Navbar from "../../NavBar/Navbar";
import styles from "./HeaderBottom.module.scss";

const HeaderBottom = () => {
  return (
    <div className={styles.headerBottom}>
      <div className={styles.bottomDropdown}><BottomDropdown/></div>
      <div className={styles.navBar}> <Navbar/> </div>

    </div>
  );
};

export default HeaderBottom;
