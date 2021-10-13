import BottomDropdown from "../../BottomDropdown/BottomDropdown";
import Navbar from "../../NavBar/Navbar";
import styles from "./HeaderBottom.module.scss";

const HeaderBottom = () => {
  return (
    <div className={styles.headerBottomContainer}>
      <div className={styles.headerBottom}>
        <div className={styles.bottomDropdown}>
          <BottomDropdown text="All Categories" />
        </div>
        <div className={styles.navBar}>
          {" "}
          <Navbar />{" "}
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
