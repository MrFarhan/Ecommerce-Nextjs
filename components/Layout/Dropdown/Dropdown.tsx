import React from "react";
import styles from "./Dropdown.module.scss";
import { BiChevronDown } from "react-icons/bi";

const Dropdown = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  console.log("show menu", showMenu);
  return (
    <div className={styles.dropdownMain} onClick={() => setShowMenu(!showMenu)}>
      <nav>
        <span
          className={showMenu ? styles.categoryNavHovered : styles.categoryNav}
        >
          All Categories
          <BiChevronDown />
          <ul>
            <li>All Categories</li>
            <li>Car</li>
            <li>Electronics</li>
            <li>Laptop</li>
            <li>Desktop</li>
            <li>Camera</li>
            <li>Toys</li>
          </ul>
        </span>
      </nav>
    </div>
  );
};

export default Dropdown;
