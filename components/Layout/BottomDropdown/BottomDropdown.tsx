import React from "react";
import styles from "./BottomDropdown.module.scss";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { bottomDropdownItems } from "./BottomDropdown.helper";

const BottomDropdown = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div
      className={styles.BottomDropdownMain}
      onClick={() => setShowMenu(!showMenu)}
    >
      <nav>
        <span
          className={showMenu ? styles.categoryNavHovered : styles.categoryNav}
        >
          <span className={styles.categoryNavHeading}>
            <BsFillGridFill  size="20px"/>
            <p>All Categories</p>
          </span>
          <AiOutlineRight />
        </span>
        <ul>
          {bottomDropdownItems?.map((item, index) => {
            return (
              <li>
                <span className={styles.bottomDropdownItemMain}>
                  <span className={styles.bottomDropdownItemImg}>
                    {" "}
                    {item?.image}
                  </span>
                  <span> {item?.heading}</span>
                </span>
                <span>
                  <AiOutlineRight />
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BottomDropdown;
