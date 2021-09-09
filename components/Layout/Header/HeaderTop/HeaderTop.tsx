import styles from "./HeaderTop.module.scss";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerTopMain}>
        <div className={styles.headerTopIconGroup}>
          <span>
            <IoCallOutline /> &nbsp; +88012 3456 7894
          </span>{" "}
          &nbsp;
          <span>
            <BsEnvelope /> &nbsp; support@ui-lib.com
          </span>
        </div>
        <div>
          <span>EN</span>&nbsp;
          <span>USD</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
